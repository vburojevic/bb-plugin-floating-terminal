// The pump between one xterm instance and one bb terminal session.
//
// The fast path is the socket bb's own terminal panel uses (lib/socket.ts):
// keystrokes go up it as they are typed and output is pushed down it as the pty
// writes, so an echo costs one network round trip and nothing more. When that
// socket is not on offer — an older bb, a proxy that refuses the upgrade — the
// pump falls back to the plugin RPC, where output is a sequence-numbered buffer
// it has to poll: fast while bytes are moving, backing off to a slow heartbeat
// when the shell is quiet. While it polls it keeps trying the socket every 30 s,
// since one that was only down for a while should come back. Either way
// nothing runs while the window is hidden (the session keeps going server-side
// and is caught up on return).
//
// One pump per tab, owned by a TerminalView effect. The pump knows nothing
// about tabs or windows; it reports status upward and asks for a restart when
// the user presses Enter at a dead prompt.
//
// Three modes: `active` (the tab on screen) polls fast, `background` (another
// tab in an open window) polls slowly so the strip can say "this one printed
// something", and `paused` (the window is hidden) does not poll at all.
import { FitAddon } from "@xterm/addon-fit";
import { SearchAddon } from "@xterm/addon-search";
import { Unicode11Addon } from "@xterm/addon-unicode11";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { WebglAddon } from "@xterm/addon-webgl";
import { Terminal } from "@xterm/xterm";
import type { PluginRpcClient } from "@bb/plugin-sdk/app";
import type { rpcContract } from "../server";
import type { TabStatus } from "./tabs";
import {
  base64ToBytes,
  encodeInputChunks,
  normalizeTerminalTitle,
} from "./terminal-io";
import { planAttach, TerminalSocket, terminalSocketUrl } from "./socket";
import { arrowSequence, controlCode, isTabCycleKey, windowChord } from "./keys";
import { forwardLateImeInput } from "./late-ime-input";
import { consumeScrollPixels } from "./scroll";
import { resolveMonoFont, resolveTerminalTheme } from "./theme";

type Rpc = PluginRpcClient<typeof rpcContract>;

/** Poll cadence, in ms: snappy under load, cheap when idle. */
const FAST_INTERVAL = 40;
const SLOW_INTERVAL = 320;
/** A tab you are not looking at only has to notice that something happened. */
const BACKGROUND_INTERVAL = 2000;
/**
 * Output in the first moments after a tab goes to the background is almost
 * always the echo of leaving it — a prompt redrawn for the resize, the tail of
 * the command you just watched — not news worth a dot.
 */
const BACKGROUND_GRACE_MS = 1500;
/** Selection settles before the window offers to do something with it. */
const SELECTION_SETTLE_MS = 160;
/** Coalesce burst keystrokes and pastes into one request. */
const INPUT_FLUSH_MS = 4;
const RESIZE_DEBOUNCE_MS = 90;
/** Backoff between socket reconnects, in ms; the last one repeats. */
const SOCKET_RETRY_MS = [100, 250, 500, 1000, 2000] as const;
/**
 * Consecutive connections that close without attaching (or straight after)
 * before the pump polls instead. More than one, so a socket that loses a race
 * with a server restart is not mistaken for one that is refused outright.
 */
const SOCKET_MAX_FAILURES = 3;
/**
 * While a tab polls because its socket kept failing, how often it tries the
 * socket again. Showing the window, or switching to the tab, tries at once.
 */
const SOCKET_PROBE_MS = 30_000;
/** A socket that stayed attached this long was working; its drop is not a failure. */
const SOCKET_STABLE_MS = 5000;
/** What bb's own terminal keeps, so scrollback depth matches between the two. */
const SCROLLBACK_LINES = 10_000;
/** Matches bb's terminal, whose wide-glyph widths come from Unicode 11. */
const UNICODE_VERSION = "11";
/** The bundled fallback in fonts/nerd-symbols.css. */
const SYMBOL_FAMILY = '"BB FT Nerd Symbols"';
/** A Private Use Area sample, so unicode-range actually matches when loading. */
const SYMBOL_SAMPLE = "\ue0a0";
/** Under this a drag is a tap, not a scroll. */
const TOUCH_SLOP_PX = 3;
/** Per-frame decay of a fling. 0.94 glides for about half a second. */
const FLING_DECAY = 0.94;
/** Give up on the fling once it is barely moving. */
const FLING_MIN_PX = 0.35;
/** A fling any faster than this is almost certainly a flick, not a drag. */
const FLING_MAX_PX_PER_FRAME = 90;
/** Fallback row height, for the tick before the renderer has measured one. */
const FALLBACK_CELL_PX = 17;

export type PumpMode = "active" | "background" | "paused";

/** Which path output and keystrokes take; see the header. */
type Transport = "socket" | "poll";

let webgl2: boolean | null = null;

/** Asked once per page, and the probe context released straight away. */
function webgl2Available(): boolean {
  if (webgl2 !== null) return webgl2;
  try {
    const gl = document.createElement("canvas").getContext("webgl2");
    webgl2 = gl !== null;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    webgl2 = false;
  }
  return webgl2;
}

export interface FindOptions {
  caseSensitive?: boolean;
  regex?: boolean;
}

export interface PumpOptions {
  container: HTMLElement;
  rpc: Rpc;
  terminalId: string;
  fontSize: number;
  onStatus: (status: TabStatus, detail: string | null) => void;
  /** Fired when the user presses Enter at a dead shell prompt. */
  onRequestRestart: () => void;
  /** Fired for shortcuts xterm must not swallow (the global toggle). */
  onToggleRequested: () => void;
  /** Ctrl+Shift+` inside the terminal: open a shell where the person is. */
  onNewHereRequested?: () => void;
  /** A meaningful OSC title the shell set, already normalised. Null clears it. */
  onTitle?: (title: string | null) => void;
  /** The armed-Ctrl latch changed, so the bar can show it. */
  onCtrlArmed?: (armed: boolean) => void;
  /** Cmd/Ctrl+F landed in the terminal; the window should open its find bar. */
  onFindRequested?: () => void;
  /**
   * Whether the view sits at the newest output, and whether output has landed
   * below it since it was parked. Drives the jump-to-latest pill.
   */
  onScrollState?: (atBottom: boolean, newOutput: boolean) => void;
  /** A background tab printed something, or any tab rang the bell. */
  onActivity?: (activity: "output" | "bell") => void;
  /** The selection settled; empty once it is cleared. */
  onSelection?: (text: string) => void;
  /**
   * A right-click with a mouse, at viewport coordinates. Returns whether the
   * window showed a menu; when it did not, the platform's own one is left be.
   */
  onContextMenu?: (x: number, y: number) => boolean;
  /** Clipboard writer; bb's own when the host offers it. */
  copyText?: (text: string) => void;
  /** Match counts from an active search: null when the search is cleared. */
  onSearchResults?: (results: { index: number; count: number } | null) => void;
}

export class TerminalPump {
  private readonly terminal: Terminal;
  private readonly fitAddon = new FitAddon();
  private readonly options: PumpOptions;

  private nextSeq = 0;
  private interval = FAST_INTERVAL;
  private pollTimer: number | null = null;
  /**
   * True from the moment a read leaves until its reply is applied. Without it,
   * a keystroke or a tab switch arriving mid-request would arm a second poll
   * carrying the same `sinceSeq`, and both replies would write the same bytes
   * into xterm — invisible on localhost, constant on a remote host.
   */
  private reading = false;
  private restartRequested = false;
  private flushTimer: number | null = null;
  private resizeTimer: number | null = null;
  private outbox: string[] = [];
  private writeChain: Promise<unknown> = Promise.resolve();
  private status: TabStatus = "connecting";
  private mode: PumpMode = "paused";
  /** When the tab last went to the background; see BACKGROUND_GRACE_MS. */
  private backgroundSince = 0;
  private selectionTimer: number | null = null;
  /** Output landed below a parked viewport since it was parked. */
  private newOutput = false;
  private started = false;
  private disposed = false;
  private resizeObserver: ResizeObserver | null = null;
  /** iOS IME candidates xterm drops; see late-ime-input.ts. */
  private lateImeInput: { dispose: () => void } | null = null;
  /** No socket to be had: no WebSocket here, or a bb (0.35) that cannot resume one. */
  private socketUnsupported = typeof WebSocket === "undefined";
  private transport: Transport = this.socketUnsupported ? "poll" : "socket";
  private socket: TerminalSocket | null = null;
  /** Connections in a row that closed before attaching; see SOCKET_MAX_FAILURES. */
  private socketFailures = 0;
  private reconnectAttempt = 0;
  private reconnectTimer: number | null = null;
  /** When the current socket attached; see SOCKET_STABLE_MS. */
  private socketAttachedAt = 0;
  /**
   * Socket chunks below this seq are a replay of retained output into a freshly
   * reset terminal, muted the same way the RPC replay is. Null once caught up.
   */
  private replayUntilSeq: number | null = null;
  /** RPC writes not yet settled; the socket waits so keystrokes stay in order. */
  private rpcWritesInFlight = 0;
  /**
   * The size this tab was last fitted to. Null until it has been on screen: a
   * tab behind another one is display:none, and its xterm still reports the
   * 80x24 it was created with.
   */
  private lastSize: { cols: number; rows: number } | null = null;
  /**
   * Non-zero while replayed scrollback is still being parsed. xterm answers
   * some sequences (cursor-position reports, device attributes) through onData,
   * and replaying historical output makes it answer them all over again — so
   * without this the shell receives a burst of synthetic input on every attach.
   */
  private replayWrites = 0;
  /** Ctrl held by the on-screen bar, consumed by the next character typed. */
  private ctrlArmed = false;
  /** In-flight touch drag; see installTouchScroll. */
  private touch = {
    active: false,
    id: -1,
    lastY: 0,
    /** Sub-line finger travel carried to the next move, so slow drags still move. */
    residual: 0,
    velocity: 0,
    movedPx: 0,
  };
  private flingFrame: number | null = null;
  /**
   * Nullable, because 0.16 is the last stable search addon and xterm 6 has no
   * contract with it — if it ever throws at load, the terminal keeps working
   * and only the find bar goes inert.
   */
  private searchAddon: SearchAddon | null = null;
  private lastAtBottom: boolean | null = null;
  private lastNewOutput = false;

  constructor(options: PumpOptions) {
    this.options = options;
    const theme = resolveTerminalTheme(options.container);

    this.terminal = new Terminal({
      fontSize: options.fontSize,
      fontFamily: resolveMonoFont(options.container),
      theme: theme.xterm,
      cursorBlink: true,
      convertEol: true,
      scrollback: SCROLLBACK_LINES,
      // Unicode 11 widths need the proposed API surface, same as bb's terminal.
      allowProposedApi: true,
      // Trim the default row gap; the window is small and vertical space is
      // the scarcest thing in it.
      lineHeight: 1.15,
    });
    this.terminal.loadAddon(this.fitAddon);
    this.terminal.loadAddon(new Unicode11Addon());
    this.terminal.unicode.activeVersion = UNICODE_VERSION;
    this.terminal.loadAddon(
      new WebLinksAddon((event, uri) => {
        event.preventDefault();
        // A content script has no bb router to hand this to, so it goes to the
        // browser the same way bb's own external-link path ends up.
        window.open(uri, "_blank", "noopener,noreferrer");
      }),
    );
    // Register WebGL *before* open(): the DOM renderer measures every newly
    // encountered glyph with synchronous layout reads, and once it exists that
    // cost is already paid. A machine without a working WebGL context falls
    // back to it silently.
    try {
      this.searchAddon = new SearchAddon();
      this.terminal.loadAddon(this.searchAddon);
      this.searchAddon.onDidChangeResults((results) => {
        if (this.disposed) return;
        this.options.onSearchResults?.({
          index: results.resultIndex,
          count: results.resultCount,
        });
      });
    } catch {
      this.searchAddon = null;
    }
    this.loadWebglRenderer();
    this.terminal.open(options.container);
    // Right after open(), so its listeners and timer run after xterm's own.
    this.lateImeInput = forwardLateImeInput(this.terminal);
    this.observeContainer();
    this.warmSymbolFont();
    this.installTouchScroll();

    // Both fire on the renderer's schedule: onScroll when the viewport moves,
    // onWriteParsed when new output lands (which moves the bottom out from
    // under a parked viewport).
    this.terminal.onScroll(() => this.reportScrollState());
    this.terminal.onWriteParsed(() => {
      const buffer = this.terminal.buffer.active;
      if (buffer.viewportY < buffer.baseY && this.replayWrites === 0) {
        this.newOutput = true;
      }
      this.reportScrollState();
    });

    this.terminal.onBell(() => {
      if (this.replayWrites > 0 || this.disposed) return;
      this.options.onActivity?.("bell");
    });

    this.terminal.onSelectionChange(() => {
      if (this.selectionTimer !== null) window.clearTimeout(this.selectionTimer);
      this.selectionTimer = window.setTimeout(() => {
        this.selectionTimer = null;
        if (!this.disposed) this.options.onSelection?.(this.terminal.getSelection());
      }, SELECTION_SETTLE_MS);
    });

    options.container.addEventListener("contextmenu", this.onContextMenu);

    this.terminal.onTitleChange((title) => {
      if (this.replayWrites > 0 || this.disposed) return;
      this.options.onTitle?.(normalizeTerminalTitle(title));
    });

    this.terminal.onData((data) => {
      if (this.replayWrites > 0) return;
      this.handleInput(data);
    });

    this.terminal.onResize(({ cols, rows }) => {
      this.scheduleResize(cols, rows);
    });

    this.terminal.attachCustomKeyEventHandler((event) => {
      if (event.type !== "keydown") return true;
      // A phone keyboard has no Ctrl, so the bar arms one and the next
      // character typed on the software keyboard becomes its control code.
      if (this.ctrlArmed && !event.ctrlKey && !event.metaKey && !event.altKey) {
        const code = controlCode(event.key);
        if (code !== null) {
          // Handled: no letter goes into the textarea, and late-ime-input.ts
          // does not forward one an iOS keyboard inserts after the fact.
          event.preventDefault();
          this.setCtrlArmed(false);
          this.handleInput(code);
          return false;
        }
      }
      const chord = windowChord(event);
      if (chord === "toggle") {
        this.options.onToggleRequested();
        return false;
      }
      if (chord === "new-here") {
        this.options.onNewHereRequested?.();
        return false;
      }
      // Cmd/Ctrl+Shift+[ and ] walk the tab strip, the way every browser and
      // editor does. Handed up untouched: the window owns the tab order, and
      // xterm must not turn Ctrl+Shift+] into a control byte on the way.
      if (isTabCycleKey(event)) return false;
      // The browser's find is useless inside a canvas; reclaim it for the
      // scrollback, the way every terminal-in-a-page does.
      // Lower-cased: with Caps Lock on, or Shift held, the key reports "F".
      const key = event.key.toLowerCase();
      if ((event.metaKey || event.ctrlKey) && !event.altKey && key === "f") {
        this.options.onFindRequested?.();
        return false;
      }
      // Cmd/Ctrl+C must stay SIGINT unless there is something to copy.
      if (
        (event.metaKey || event.ctrlKey) &&
        key === "c" &&
        this.terminal.hasSelection()
      ) {
        this.copy(this.terminal.getSelection());
        return false;
      }
      if (event.metaKey && key === "k") {
        this.terminal.clear();
        return false;
      }
      return true;
    });
  }

  /**
   * Refit whenever the box actually changes, not only when the window commits a
   * drag. A font-size change, the tab strip wrapping, or the bb window itself
   * resizing all move this container without any gesture the window hears about,
   * and an unfitted xterm reports stale cols/rows to the pty.
   */
  private observeContainer(): void {
    if (typeof ResizeObserver === "undefined") return;
    let frame: number | null = null;
    this.resizeObserver = new ResizeObserver(() => {
      // rAF-coalesced: fit() writes back into the observed box, and calling it
      // synchronously inside the callback is what trips "loop limit exceeded".
      if (frame !== null || this.disposed) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        if (!this.disposed) this.fit();
      });
    });
    this.resizeObserver.observe(this.options.container);
  }

  /**
   * Touch scrolling, which xterm does not have.
   *
   * xterm 6 replaced the old overflow-scrolled viewport with VS Code's
   * SmoothScrollableElement, and that widget only listens for wheel events —
   * VS Code wires touch into its lists separately, and none of that came
   * across. So on a touch screen the scrollback is simply unreachable: the
   * scrollbar renders, and dragging does nothing at all.
   *
   * Rather than synthesise wheel events — the widget reads the legacy
   * `wheelDeltaY` before `deltaY`, so a constructed event is at the mercy of
   * whatever the browser fills in — this drives xterm's public scrollLines.
   */
  private installTouchScroll(): void {
    const el = this.options.container;
    const options = { passive: false } as const;
    el.addEventListener("touchstart", this.onTouchStart, options);
    el.addEventListener("touchmove", this.onTouchMove, options);
    el.addEventListener("touchend", this.onTouchEnd, options);
    el.addEventListener("touchcancel", this.onTouchEnd, options);
  }

  private reportScrollState(): void {
    if (this.disposed) return;
    const buffer = this.terminal.buffer.active;
    // The alternate buffer has no scrollback, so it always reads as bottom —
    // which is right: the pill would be noise over vim or less.
    const atBottom = buffer.viewportY >= buffer.baseY;
    if (atBottom) this.newOutput = false;
    if (atBottom === this.lastAtBottom && this.newOutput === this.lastNewOutput) {
      return;
    }
    this.lastAtBottom = atBottom;
    this.lastNewOutput = this.newOutput;
    this.options.onScrollState?.(atBottom, this.newOutput);
  }

  private readonly onContextMenu = (event: MouseEvent): void => {
    // Touch long-presses belong to the platform's own selection handles.
    if (this.disposed || this.options.onContextMenu === undefined) return;
    if ((event as PointerEvent).pointerType === "touch") return;
    if (this.options.onContextMenu(event.clientX, event.clientY)) {
      event.preventDefault();
    }
  };

  private copy(text: string): void {
    if (text === "") return;
    if (this.options.copyText !== undefined) this.options.copyText(text);
    else void navigator.clipboard?.writeText(text);
  }

  // ------------------------------------------------------------- clipboard

  hasSelection(): boolean {
    return this.terminal.hasSelection();
  }

  getSelection(): string {
    return this.terminal.getSelection();
  }

  clearSelection(): void {
    this.terminal.clearSelection();
  }

  selectAll(): void {
    this.terminal.selectAll();
  }

  copySelection(): boolean {
    const text = this.terminal.getSelection();
    this.copy(text);
    return text !== "";
  }

  /**
   * Everything in the scrollback as plain text: wrapped rows rejoined, trailing
   * blank rows dropped. What "Copy all output" and "Send to agent" use.
   */
  allText(): string {
    const buffer = this.terminal.buffer.active;
    const lines: string[] = [];
    for (let row = 0; row < buffer.length; row += 1) {
      const line = buffer.getLine(row);
      if (line === undefined) continue;
      const text = line.translateToString(true);
      if (line.isWrapped && lines.length > 0) lines[lines.length - 1] += text;
      else lines.push(text);
    }
    while (lines.length > 0 && lines[lines.length - 1]!.trim() === "") lines.pop();
    return lines.join("\n");
  }

  /**
   * Type text in as one paste. xterm wraps it in bracketed-paste markers when
   * the shell asked for them, which is what keeps a multi-line command from
   * running line by line as it lands.
   */
  paste(text: string): void {
    this.terminal.paste(text);
  }

  /** Whether the program at the prompt asked for bracketed paste. */
  bracketedPaste(): boolean {
    return this.terminal.modes.bracketedPasteMode;
  }

  clear(): void {
    this.terminal.clear();
  }

  scrollToBottom(): void {
    this.terminal.scrollToBottom();
  }

  // ------------------------------------------------------------------ find

  /** Search options once, so every entry point highlights the same way. */
  private searchOptions() {
    const theme = this.terminal.options.theme ?? {};
    const accent = theme.cursor ?? "#5b8cff";
    return {
      decorations: {
        matchBackground: `${accent}40`,
        matchBorder: `${accent}00`,
        matchOverviewRuler: `${accent}66`,
        activeMatchBackground: `${accent}a6`,
        activeMatchBorder: `${accent}00`,
        activeMatchColorOverviewRuler: accent,
      },
    };
  }

  /** True when the addon loaded; the find UI hides itself otherwise. */
  searchAvailable(): boolean {
    return this.searchAddon !== null;
  }

  /**
   * `incremental` keeps the active match anchored while the query grows, which
   * is what makes find-as-you-type read as refinement instead of jumping.
   */
  findNext(query: string, options: FindOptions = {}, incremental = false): void {
    if (this.searchAddon === null || query === "") return;
    try {
      this.searchAddon.findNext(query, {
        ...this.searchOptions(),
        ...options,
        incremental,
      });
    } catch {
      // A regex still being typed (`foo(`) is not an error worth a toast.
    }
  }

  findPrevious(query: string, options: FindOptions = {}): void {
    if (this.searchAddon === null || query === "") return;
    try {
      this.searchAddon.findPrevious(query, { ...this.searchOptions(), ...options });
    } catch {
      // As above.
    }
  }

  clearSearch(): void {
    this.searchAddon?.clearDecorations();
    this.options.onSearchResults?.(null);
  }

  /** Row height in CSS pixels, derived rather than measured per glyph. */
  private cellHeight(): number {
    const screen = this.terminal.element?.querySelector(".xterm-screen");
    const rows = Math.max(this.terminal.rows, 1);
    const height = screen instanceof HTMLElement ? screen.clientHeight : 0;
    return height > 0 ? height / rows : FALLBACK_CELL_PX;
  }

  /**
   * Positive scrolls towards the newest output, matching scrollLines. In the
   * alternate buffer there is no scrollback to move through, so send cursor
   * keys instead — the same substitution xterm makes for a wheel there, which
   * is what lets a finger scroll vim, less or tmux.
   */
  private scrollByLines(lines: number): void {
    if (lines === 0) return;
    if (this.terminal.buffer.active.type === "alternate") {
      const sequence = arrowSequence(
        lines > 0 ? "down" : "up",
        this.terminal.modes.applicationCursorKeysMode,
      );
      for (let index = 0; index < Math.min(Math.abs(lines), 8); index += 1) {
        this.handleInput(sequence);
      }
      return;
    }
    this.terminal.scrollLines(lines);
  }

  /** Convert accumulated finger travel into whole lines, keeping the remainder. */
  private consumePixels(dy: number): void {
    const step = consumeScrollPixels(this.touch.residual, dy, this.cellHeight());
    this.touch.residual = step.residual;
    this.scrollByLines(step.lines);
  }

  private readonly onTouchStart = (event: TouchEvent): void => {
    this.stopFling();
    // Two fingers is a pinch or a system gesture; leave it alone.
    if (event.touches.length !== 1) {
      this.touch.active = false;
      return;
    }
    const point = event.touches[0]!;
    this.touch = {
      active: true,
      id: point.identifier,
      lastY: point.clientY,
      residual: 0,
      velocity: 0,
      movedPx: 0,
    };
  };

  private readonly onTouchMove = (event: TouchEvent): void => {
    if (!this.touch.active || this.disposed) return;
    const point = Array.from(event.touches).find(
      (candidate) => candidate.identifier === this.touch.id,
    );
    if (point === undefined) return;

    // Dragging the content down walks back through history, the way dragging a
    // page down does — so a downward finger is a negative line delta.
    const dy = this.touch.lastY - point.clientY;
    this.touch.lastY = point.clientY;
    this.touch.movedPx += Math.abs(dy);
    if (this.touch.movedPx < TOUCH_SLOP_PX) return;

    // Past the slop this is a scroll, so keep the page and the sheet still.
    event.preventDefault();
    this.touch.velocity = dy;
    this.consumePixels(dy);
  };

  private readonly onTouchEnd = (): void => {
    if (!this.touch.active) return;
    this.touch.active = false;
    if (this.touch.movedPx < TOUCH_SLOP_PX) return;
    const velocity = Math.max(
      -FLING_MAX_PX_PER_FRAME,
      Math.min(FLING_MAX_PX_PER_FRAME, this.touch.velocity),
    );
    if (Math.abs(velocity) < FLING_MIN_PX) return;
    this.startFling(velocity);
  };

  private startFling(initial: number): void {
    // A glide is decorative; the drag itself already scrolled. Users who asked
    // the platform for less motion get exactly the drag.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let velocity = initial;
    const step = (): void => {
      if (this.disposed) return;
      this.consumePixels(velocity);
      velocity *= FLING_DECAY;
      if (Math.abs(velocity) < FLING_MIN_PX) {
        this.flingFrame = null;
        return;
      }
      this.flingFrame = window.requestAnimationFrame(step);
    };
    this.flingFrame = window.requestAnimationFrame(step);
  }

  private stopFling(): void {
    if (this.flingFrame === null) return;
    window.cancelAnimationFrame(this.flingFrame);
    this.flingFrame = null;
  }

  /**
   * The renderer rasterises each glyph once into a texture atlas and caches it
   * forever. A webfont that is still loading when the terminal opens therefore
   * gets baked in as tofu — the glyphs never repair themselves, because nothing
   * invalidates the atlas when a font arrives. That is exactly the bundled
   * symbol font's situation: it is a 1MB data URL the browser only decodes once
   * something asks for a codepoint in its unicode-range.
   *
   * So ask for one explicitly, then drop the atlas once the font is really
   * there. Cheap, and it runs once per terminal.
   */
  private warmSymbolFont(): void {
    const fonts = document.fonts as FontFaceSet | undefined;
    if (fonts === undefined) return;
    const size = this.terminal.options.fontSize ?? 13;
    void fonts
      .load(`${size}px ${SYMBOL_FAMILY}`, SYMBOL_SAMPLE)
      .then(() => fonts.ready)
      .then(() => {
        if (this.disposed) return;
        this.terminal.clearTextureAtlas();
      })
      .catch(() => {
        // No symbol font is a cosmetic loss, not a broken terminal.
      });
  }

  /**
   * WebGL is best-effort: a failed construction, a refused context, or a driver
   * that later drops the context all fall back to the DOM renderer rather than
   * leaving a dead canvas. Mirrors what bb's own terminal does.
   */
  private loadWebglRenderer(): void {
    // Without WebGL2 the addon fails inside open(), outside this try, as an
    // uncaught error; the DOM renderer is the right answer anyway.
    if (!webgl2Available()) return;
    let addon: WebglAddon | null = null;
    let contextLoss: { dispose: () => void } | null = null;
    try {
      addon = new WebglAddon();
      contextLoss = addon.onContextLoss(() => {
        contextLoss?.dispose();
        addon?.dispose();
      });
      this.terminal.loadAddon(addon);
    } catch {
      contextLoss?.dispose();
      addon?.dispose();
    }
  }

  /** Track replay writes so onData/onTitleChange stay muted until they land. */
  private writeOutput(bytes: Uint8Array, isReplay: boolean): void {
    if (!isReplay) {
      this.terminal.write(bytes);
      return;
    }
    this.replayWrites += 1;
    this.terminal.write(bytes, () => {
      this.replayWrites -= 1;
    });
  }

  /** Output from either transport that is not a replay: status and activity. */
  private noteLiveOutput(): void {
    if (this.status !== "live") this.setStatus("live");
    if (
      this.mode === "background" &&
      Date.now() - this.backgroundSince > BACKGROUND_GRACE_MS
    ) {
      this.options.onActivity?.("output");
    }
  }

  // ---------------------------------------------------------------- socket

  /**
   * Open the push connection, resuming after the last byte already written.
   * Only while the window is open: a hidden window holds no connection, the
   * same way it does not poll. While the tab is polling as a fallback, this is
   * the retry that hands it back to the socket once one attaches.
   */
  private connectSocket(): void {
    if (
      this.socketUnsupported ||
      this.socket !== null ||
      this.disposed ||
      !this.started ||
      this.mode === "paused" ||
      this.status === "exited"
    ) {
      return;
    }
    this.clearReconnect();
    let socket: TerminalSocket;
    try {
      socket = new TerminalSocket({
        url: terminalSocketUrl(
          window.location,
          this.options.terminalId,
          this.nextSeq,
        ),
        handlers: {
          onAttached: (info) => this.onSocketAttached(socket, info),
          onOutput: (seq, dataBase64) =>
            this.onSocketOutput(socket, seq, dataBase64),
          onExited: (session) => {
            if (this.socket !== socket) return;
            this.socket = null;
            this.reportExit(session.status, session.exitCode);
          },
          onGone: (code) => {
            if (this.socket !== socket) return;
            this.socket = null;
            if (code === "terminal_not_running") {
              // Starting, or between states: the RPC path knows how to wait
              // that out and report what it settles into.
              this.fallBackToPolling();
            } else {
              this.reportExit("gone", null);
            }
          },
          onClosed: (attached) => this.onSocketClosed(socket, attached),
        },
      });
    } catch {
      this.fallBackToPolling();
      return;
    }
    this.socket = socket;
  }

  private onSocketAttached(
    socket: TerminalSocket,
    info: {
      replayStartSeq: number | null;
      nextSeq: number;
      session: { status: string };
    },
  ): void {
    if (this.socket !== socket || this.disposed) return;
    if (info.replayStartSeq === null) {
      // bb 0.35: attach cannot resume from a seq, so every reconnect would
      // replay from wherever the server chose. Polling handles that bb fine.
      this.socketUnsupported = true;
      this.fallBackToPolling();
      return;
    }
    if (this.transport === "poll") {
      // A retry got through: the socket takes over from the polling loop. A
      // read still out when this lands is dropped (see poll()), and anything
      // polling already wrote is skipped below by its seq.
      this.transport = "socket";
      this.stopPolling();
    }
    this.socketAttachedAt = Date.now();
    const plan = planAttach(this.nextSeq, info.replayStartSeq, info.nextSeq);
    // The ring buffer wrapped past our cursor while we were away; redraw from
    // what is retained rather than splicing a hole into scrollback.
    if (plan.reset) this.terminal.reset();
    this.nextSeq = plan.cursor;
    this.replayUntilSeq = plan.replayUntilSeq;
    if (info.session.status === "running" || info.session.status === "starting") {
      this.setStatus("live");
    }
    // Attaching made this socket the session's resize owner, so this always
    // lands: opening the window on a device sizes the pty to that device,
    // even when another one had it last. A tab that has never been on screen
    // has no size of its own yet, and leaves the pty as it is.
    if (this.lastSize !== null) {
      socket.sendResize(this.lastSize.cols, this.lastSize.rows);
    }
    // Anything typed while the socket was down went to the RPC outbox; send it
    // now so it does not sit behind the coalescing timer.
    if (this.outbox.length > 0) {
      if (this.flushTimer !== null) window.clearTimeout(this.flushTimer);
      this.flushTimer = null;
      this.flushInput();
    }
  }

  private onSocketOutput(
    socket: TerminalSocket,
    seq: number,
    dataBase64: string,
  ): void {
    if (this.socket !== socket || this.disposed) return;
    // Already written (a reconnect that resumed a little early).
    if (seq < this.nextSeq) return;
    const isReplay = this.replayUntilSeq !== null && seq < this.replayUntilSeq;
    if (this.replayUntilSeq !== null && seq + 1 >= this.replayUntilSeq) {
      this.replayUntilSeq = null;
    }
    this.nextSeq = seq + 1;
    this.writeOutput(base64ToBytes(dataBase64), isReplay);
    if (!isReplay) this.noteLiveOutput();
  }

  private onSocketClosed(socket: TerminalSocket, attached: boolean): void {
    if (this.socket !== socket) return;
    this.socket = null;
    if (this.disposed || this.status === "exited") return;
    // A connection that attached and then held is a healthy one that dropped
    // (a server restart, a network blip): retry it from the top. One that
    // never attached, or that was cut straight after, counts against the
    // socket — otherwise a proxy that kills it on arrival would have the pump
    // reconnecting every 100 ms for ever instead of polling.
    if (attached && Date.now() - this.socketAttachedAt >= SOCKET_STABLE_MS) {
      this.socketFailures = 0;
      this.reconnectAttempt = 0;
    } else {
      this.socketFailures += 1;
      if (this.socketFailures >= SOCKET_MAX_FAILURES) {
        this.fallBackToPolling();
        return;
      }
    }
    this.scheduleReconnect();
  }

  /** Quick retries while the socket is the transport, slow ones while polling. */
  private scheduleReconnect(): void {
    if (
      this.reconnectTimer !== null ||
      this.socketUnsupported ||
      this.mode === "paused" ||
      this.disposed
    ) {
      return;
    }
    const delay =
      this.transport === "poll"
        ? SOCKET_PROBE_MS
        : SOCKET_RETRY_MS[Math.min(this.reconnectAttempt, SOCKET_RETRY_MS.length - 1)]!;
    this.reconnectAttempt += 1;
    this.reconnectTimer = window.setTimeout(() => {
      this.reconnectTimer = null;
      this.connectSocket();
    }, delay);
  }

  private clearReconnect(): void {
    if (this.reconnectTimer === null) return;
    window.clearTimeout(this.reconnectTimer);
    this.reconnectTimer = null;
  }

  private closeSocket(): void {
    this.clearReconnect();
    this.socket?.dispose();
    this.socket = null;
  }

  /**
   * The socket is not working here; poll over RPC, and try the socket again
   * now and then in case it was only down for a while (a bb restart, a phone
   * changing networks).
   */
  private fallBackToPolling(): void {
    this.closeSocket();
    if (this.disposed) return;
    if (this.transport === "socket") {
      this.transport = "poll";
      this.replayUntilSeq = null;
      this.interval = FAST_INTERVAL;
      if (this.nextSeq === 0) void this.replay();
      else this.schedule(0);
    }
    this.scheduleReconnect();
  }

  /**
   * Everything the shell receives goes through here — real keystrokes and the
   * on-screen bar alike — so the dead-prompt restart works from both.
   */
  private handleInput(data: string): void {
    if (this.disposed) return;
    if (this.status === "exited" && data.includes("\r")) {
      // Latched: the pump stays "exited" for the whole restart round trip, so
      // without this every extra Enter fires another restart, and each one
      // creates a PTY the tab strip will never show.
      if (this.restartRequested) return;
      this.restartRequested = true;
      this.options.onRequestRestart();
      return;
    }
    this.queueInput(data);
  }

  /** Write bytes as if they had been typed. Used by the on-screen key bar. */
  send(data: string): void {
    this.handleInput(data);
  }

  /** True when the program asked for SS3 arrows (vim, less, anything full-screen). */
  applicationCursorKeys(): boolean {
    return this.terminal.modes.applicationCursorKeysMode;
  }

  setCtrlArmed(armed: boolean): void {
    if (this.ctrlArmed === armed) return;
    this.ctrlArmed = armed;
    this.options.onCtrlArmed?.(armed);
  }

  blur(): void {
    this.terminal.blur();
  }

  private setStatus(status: TabStatus, detail: string | null = null): void {
    if (this.status === status && detail === null) return;
    this.status = status;
    this.options.onStatus(status, detail);
  }

  private queueInput(data: string): void {
    // Straight up the socket: no coalescing timer and no request per burst,
    // which is the whole point of having one. Only when nothing is queued for
    // the RPC path, or this keystroke would overtake an earlier one.
    if (
      this.socket?.ready() === true &&
      this.outbox.length === 0 &&
      this.rpcWritesInFlight === 0
    ) {
      // A socket cannot close between two sends in the same task, so if the
      // first chunk goes the rest of a paste does too.
      const [first, ...rest] = encodeInputChunks(data);
      if (first === undefined) return;
      if (this.socket.sendInput(first)) {
        for (const chunk of rest) this.socket.sendInput(chunk);
        return;
      }
    }
    this.outbox.push(data);
    if (this.flushTimer !== null) return;
    this.flushTimer = window.setTimeout(() => {
      this.flushTimer = null;
      this.flushInput();
    }, INPUT_FLUSH_MS);
  }

  private flushInput(): void {
    const pending = this.outbox.join("");
    this.outbox = [];
    if (pending === "" || this.disposed) return;

    // Chained so keystrokes reach the pty in the order they were typed, and
    // chunked so a paste over the transport ceiling is split instead of refused.
    for (const dataBase64 of encodeInputChunks(pending)) {
      this.rpcWritesInFlight += 1;
      this.writeChain = this.writeChain
        .then(() =>
          this.options.rpc.call("write", {
            terminalId: this.options.terminalId,
            dataBase64,
          }),
        )
        .catch((error: unknown) => {
          this.setStatus(
            "error",
            error instanceof Error ? error.message : "Write failed",
          );
        })
        .finally(() => {
          this.rpcWritesInFlight -= 1;
        });
    }
    // Any keystroke pulls polling back to its fastest.
    this.interval = FAST_INTERVAL;
    if (this.pollTimer !== null) this.schedule(FAST_INTERVAL);
  }

  private scheduleResize(cols: number, rows: number): void {
    if (this.resizeTimer !== null) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.resizeTimer = null;
      if (this.disposed) return;
      // Over RPC even when the socket is up. bb lets only the session's most
      // recently attached socket resize it, so with the same tab open on a
      // phone and a laptop, a socket resize from the other one is dropped and
      // its lines wrap at the wrong width. The RPC resize always lands.
      void this.options.rpc
        .call("resize", { terminalId: this.options.terminalId, cols, rows })
        .catch(() => {
          // A resize racing a closed session is not worth surfacing; the next
          // poll reports the real state.
        });
    }, RESIZE_DEBOUNCE_MS);
  }

  private stopPolling(): void {
    if (this.pollTimer !== null) {
      window.clearTimeout(this.pollTimer);
      this.pollTimer = null;
    }
  }

  private schedule(delay: number): void {
    this.stopPolling();
    if (this.transport !== "poll") return;
    if (this.disposed || this.mode === "paused" || !this.started) return;
    if (this.mode === "background") delay = Math.max(delay, BACKGROUND_INTERVAL);
    // A read already in flight will schedule the next one when it lands;
    // arming another here is what duplicates output.
    if (this.reading) return;
    this.pollTimer = window.setTimeout(() => void this.poll(), delay);
  }

  // What to do once the read settles. Decided inside the try, acted on after
  // the finally has cleared `reading` — an early return would run the finally
  // and skip the follow-up, leaving the loop dead.
  private async poll(): Promise<void> {
    this.pollTimer = null;
    if (this.disposed || this.mode === "paused" || this.reading) return;
    this.reading = true;
    let next: "schedule" | "replay" | "stop" = "schedule";

    try {
      const sinceSeq = this.nextSeq;
      const result = await this.options.rpc.call("read", {
        terminalId: this.options.terminalId,
        sinceSeq,
      });

      if (this.disposed || this.transport !== "poll") {
        // Or the socket took over while this read was out, and its output is
        // already on screen or on the way.
        next = "stop";
      } else if (this.nextSeq !== sinceSeq) {
        // A socket wrote past this read while it was out, and then dropped;
        // writing it now would repeat that output. Read again from there.
        next = "schedule";
      } else if (result.truncated && this.nextSeq > 0) {
        // The ring buffer wrapped past our cursor while this tab was hidden;
        // redraw from the tail rather than splicing a hole into scrollback.
        next = "replay";
      } else {
        for (const chunk of result.chunks) {
          this.writeOutput(base64ToBytes(chunk.dataBase64), false);
        }
        this.nextSeq = result.nextSeq;

        if (result.chunks.length > 0) {
          this.interval = FAST_INTERVAL;
          this.noteLiveOutput();
        } else if (
          result.status !== null &&
          result.status !== "running" &&
          result.status !== "starting"
        ) {
          this.reportExit(result.status, result.exitCode);
          next = "stop";
        } else {
          this.interval = Math.min(this.interval * 2, SLOW_INTERVAL);
          if (this.status !== "live") this.setStatus("live");
        }
      }
    } catch (error) {
      if (this.disposed || this.transport !== "poll") {
        next = "stop";
      } else {
        this.setStatus(
          "error",
          error instanceof Error ? error.message : "Read failed",
        );
        this.interval = SLOW_INTERVAL;
      }
    } finally {
      this.reading = false;
    }

    if (next === "replay") await this.replay();
    else if (next === "schedule") this.schedule(this.interval);
  }

  private reportExit(status: string, exitCode: number | null): void {
    this.stopPolling();
    this.closeSocket();
    const label =
      status === "gone"
        ? "Session closed"
        : exitCode === null
          ? "Shell exited"
          : `Shell exited with code ${exitCode}`;
    this.terminal.write(
      `\r\n\x1b[2m[${label} — press Enter to start a new one]\x1b[0m\r\n`,
    );
    this.setStatus("exited", label);
  }

  /** Redraw the whole terminal from the session's retained scrollback. */
  private async replay(): Promise<void> {
    if (this.disposed || this.reading) return;
    this.reading = true;
    let ok = false;

    try {
      const result = await this.options.rpc.call("read", {
        terminalId: this.options.terminalId,
        sinceSeq: 0,
        replay: true,
      });
      // Not if the socket took over meanwhile: it replays on attach itself.
      if (!this.disposed && this.transport === "poll") {
        this.terminal.reset();
        for (const chunk of result.chunks) {
          this.writeOutput(base64ToBytes(chunk.dataBase64), true);
        }
        this.nextSeq = result.nextSeq;
        this.interval = FAST_INTERVAL;
        this.setStatus("live");
        ok = true;
      }
    } catch (error) {
      if (!this.disposed && this.transport === "poll") {
        this.setStatus(
          "error",
          error instanceof Error ? error.message : "Could not attach",
        );
        // Keep the loop alive on a transient failure so the tab self-heals
        // instead of sitting in an error state until the user restarts it.
        this.interval = SLOW_INTERVAL;
        ok = true;
      }
    } finally {
      this.reading = false;
    }

    if (ok) this.schedule(this.interval);
  }

  /** Replay existing scrollback and begin polling. Call once, after fit(). */
  start(): void {
    if (this.started || this.disposed) return;
    this.started = true;
    // The socket replays retained output as part of attaching. It only opens
    // while the window is, so a hidden one connects when it is first shown.
    if (this.transport === "socket") this.connectSocket();
    else void this.replay();
  }

  /**
   * The mode drives polling: the tab on screen is fast, a tab behind it in an
   * open window is slow, and nothing polls while the window is hidden.
   */
  setMode(mode: PumpMode): void {
    if (this.mode === mode) return;
    const previous = this.mode;
    this.mode = mode;
    if (mode === "active") {
      this.fit();
      this.interval = FAST_INTERVAL;
      this.schedule(0);
      this.connectSocket();
    } else if (mode === "background") {
      this.backgroundSince = Date.now();
      // Leaving the screen is not news; arriving in the background from a
      // hidden window can start at the slow cadence straight away.
      this.schedule(previous === "paused" ? 0 : BACKGROUND_INTERVAL);
      // A pushed socket costs nothing while quiet, so a background tab keeps
      // its own: it still has to say "this one printed something".
      this.connectSocket();
    } else {
      this.stopPolling();
      this.closeSocket();
      this.reconnectAttempt = 0;
    }
  }

  fit(): void {
    if (this.disposed) return;
    const { clientWidth, clientHeight } = this.options.container;
    if (clientWidth === 0 || clientHeight === 0) return;
    try {
      // fit() does nothing until the renderer has measured a cell; only a
      // fit that happened counts as this tab's size.
      const proposed = this.fitAddon.proposeDimensions();
      this.fitAddon.fit();
      if (proposed !== undefined && Number.isFinite(proposed.cols)) {
        this.lastSize = { cols: this.terminal.cols, rows: this.terminal.rows };
      }
    } catch {
      // fit() throws if the renderer is not ready yet; the next call succeeds.
    }
  }

  focus(): void {
    this.terminal.focus();
  }

  cols(): number {
    return Math.max(this.terminal.cols, 2);
  }

  rows(): number {
    return Math.max(this.terminal.rows, 2);
  }

  setFontSize(fontSize: number): void {
    if (this.terminal.options.fontSize === fontSize) return;
    this.terminal.options.fontSize = fontSize;
    this.fit();
  }

  refreshTheme(): void {
    this.terminal.options.theme = resolveTerminalTheme(
      this.options.container,
    ).xterm;
  }

  dispose(): void {
    this.disposed = true;
    this.stopFling();
    if (this.selectionTimer !== null) window.clearTimeout(this.selectionTimer);
    const el = this.options.container;
    el.removeEventListener("contextmenu", this.onContextMenu);
    el.removeEventListener("touchstart", this.onTouchStart);
    el.removeEventListener("touchmove", this.onTouchMove);
    el.removeEventListener("touchend", this.onTouchEnd);
    el.removeEventListener("touchcancel", this.onTouchEnd);
    this.stopPolling();
    this.closeSocket();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    this.lateImeInput?.dispose();
    this.lateImeInput = null;
    if (this.flushTimer !== null) window.clearTimeout(this.flushTimer);
    if (this.resizeTimer !== null) window.clearTimeout(this.resizeTimer);
    this.terminal.dispose();
  }
}
