// The floating terminal window.
//
// All React: one component owns open state (via the external controller),
// geometry (via the frame helpers), the tab list (via the tabs reducer), and
// renders the tab bar, one TerminalView per open tab, and a teaching empty
// state. The only imperative islands are xterm itself (inside TerminalView)
// and the pointer-capture drag/resize handlers, both behind refs.
//
// Nothing renders until the window is first opened; from then on it stays
// mounted even while hidden, which is what keeps every tab's scrollback alive.
// Show/hide is a CSS transition driven by data-state.
//
// The element tree is two boxes on purpose. The outer one is positioned and
// owns the resize handles, which straddle its edge; the inner one is the
// rounded, clipped surface. With the handles inside the clip they sat on top
// of the title bar, and the top-right corner handle swallowed part of the hide
// button.
import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { toast } from "sonner";
import { Icon } from "@/components/ui/icon";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsCompactViewport } from "@/components/ui/hooks/use-compact-viewport";
import { ShellPicker } from "@/components/shell-picker";
import { FindBar } from "@/components/find-bar";
import { KeyToolbar } from "@/components/key-toolbar";
import { TabBar } from "@/components/tab-bar";
import { TerminalView } from "@/components/terminal-view";
import {
  Pill,
  PillBar,
  ShortcutsPanel,
  TerminalMenu,
} from "@/components/terminal-overlays";
import { MOD, WindowMenu } from "@/components/window-menu";
import { quoteForAgent } from "@/lib/commands";
import {
  composerBridge,
  hostContext,
  windowController,
  type HostContext,
  type WindowCommand,
} from "@/lib/controller";
import {
  clampFrame,
  installDrag,
  installResize,
  loadFrame,
  RESIZE_EDGES,
  saveFrame,
  snapFrame,
  type Frame,
  type SnapTarget,
} from "@/lib/frame";
import { copyText } from "@/lib/host";
import { clampFontSize, loadFontOverride, saveFontOverride } from "@/lib/prefs";
import type { FindOptions, TerminalPump } from "@/lib/pump";
import {
  arrowSequence,
  isTabCycleKey,
  tabCycleDirection,
  windowChord,
  type ToolbarKey,
} from "@/lib/keys";
import { createRpcClient } from "@/lib/rpc";
import type { ScopeOption } from "@/lib/scopes";
import { resolveTerminalTheme } from "@/lib/theme";
import { trackVisualViewport } from "@/lib/viewport";
import { emptyTabs, tabsReducer, type TabStatus } from "@/lib/tabs";
import type { rpcContract } from "../server";

const PLUGIN_ID = "floating-terminal";

/** Long enough that a per-prompt title setter costs one rename, not dozens. */
const TITLE_RENAME_DEBOUNCE_MS = 500;

/** Maximized keeps a sliver of app visible, so it still reads as a window. */
const MAX_GUTTER = 16;

/** Geometry for openTab before any pump exists; the first fit corrects it. */
const DEFAULT_COLS = 80;
const DEFAULT_ROWS = 24;

/** "Send output to the agent" without a selection: the recent tail, not 10k lines. */
const AGENT_TAIL_LINES = 120;

/**
 * A fresh shell is still drawing its first prompt when its first bytes land;
 * text pasted before the line editor is up would arrive without the bracketed
 * paste mode that keeps a multi-line command from running line by line.
 */
const FIRST_PROMPT_SETTLE_MS = 250;

/**
 * The window with nothing in it. Its job is to get you into a shell in one
 * click and to answer the one question that changes how you use it — whether
 * closing the window kills your work. Everything else stays quiet.
 */
function EmptyState({
  scopes,
  recentScopeKeys,
  here,
  showHosts,
  starting,
  onPick,
}: {
  scopes: ScopeOption[];
  recentScopeKeys: string[];
  here: ScopeOption | null;
  showHosts: boolean;
  starting: string | null;
  onPick: (scopeKey: string) => void;
}) {
  if (starting !== null) {
    return (
      <div className="flex size-full flex-col items-center justify-center gap-3 p-4 text-center">
        <span className="bb-ft-spinner" aria-hidden="true" />
        <p className="text-xs text-muted-foreground" aria-live="polite">
          Starting a shell in <span className="text-foreground">{starting}</span>…
        </p>
      </div>
    );
  }

  return (
    // A column, not a row: `items-center` on a row container sizes the child
    // from its content, so a long directory list grew past the window and got
    // centre-clipped — the heading scrolled off the top edge and the list could
    // not scroll. As a column with `min-h-0` the child shrinks to the available
    // height instead, and the list inside it scrolls.
    <div className="flex size-full min-h-0 flex-col items-center justify-center overflow-hidden p-4">
      {/* Centred while it fits, filling and scrolling once it does not. */}
      <div className="flex min-h-0 w-full min-w-0 max-w-md flex-col gap-3">
        <div className="flex shrink-0 items-start gap-3 px-1">
          <span className="bb-ft-empty-mark" aria-hidden="true">
            <Icon name="Terminal" className="size-4" />
          </span>
          <div className="flex min-w-0 flex-col gap-0.5">
            <h2 className="text-sm font-medium text-foreground">Start a shell</h2>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Pick where it runs. Shells keep going while this window is hidden.
            </p>
          </div>
        </div>
        <ShellPicker
          scopes={scopes}
          recentScopeKeys={recentScopeKeys}
          here={here}
          showHosts={showHosts}
          onPick={onPick}
          fill
          className="bb-ft-empty-picker min-h-0 flex-1"
        />
        <p className="bb-ft-hints shrink-0" aria-hidden="true">
          <span>
            <kbd className="bb-ft-kbd">Ctrl+`</kbd> show/hide
          </span>
          <span>
            <kbd className="bb-ft-kbd">Ctrl+Shift+`</kbd> shell here
          </span>
          <span>
            <kbd className="bb-ft-kbd">{MOD}F</kbd> find
          </span>
        </p>
      </div>
    </div>
  );
}

export function FloatingTerminal() {
  const open = useSyncExternalStore(
    windowController.subscribe,
    windowController.isOpen,
  );
  const context = useSyncExternalStore(hostContext.subscribe, hostContext.get);
  const composerAvailable = useSyncExternalStore(
    composerBridge.subscribe,
    composerBridge.available,
  );

  const rpcRef = useRef(createRpcClient<typeof rpcContract>(PLUGIN_ID));
  const rpc = rpcRef.current;

  /**
   * Below bb's own compact-viewport breakpoint the window becomes a sheet: it
   * fills the viewport minus one inset, styles.css owns the geometry, and drag
   * and resize are never installed. Everything else about it is unchanged.
   */
  const sheet = useIsCompactViewport();
  const sheetRef = useRef(sheet);
  sheetRef.current = sheet;

  const [state, dispatch] = useReducer(tabsReducer, emptyTabs);
  const [scopes, setScopes] = useState<ScopeOption[]>([]);
  const [recentScopeKeys, setRecentScopeKeys] = useState<string[]>([]);
  /** The directory in view — the thread's worktree, or the project. */
  const [here, setHere] = useState<ScopeOption | null>(null);
  const [settingFontSize, setSettingFontSize] = useState(13);
  const [fontOverride, setFontOverride] = useState<number | null>(loadFontOverride);
  const fontSize = fontOverride ?? settingFontSize;
  const [shortcutEnabled, setShortcutEnabled] = useState(true);
  const [themeVersion, setThemeVersion] = useState(0);
  const [fitVersion, setFitVersion] = useState(0);
  /** The terminal's exact background, so the gutters around it match to the pixel. */
  const [surface, setSurface] = useState<string | null>(null);
  const [ctrlArmed, setCtrlArmed] = useState(false);
  /** Window mode only. Never persisted: a maximized session is a mood, not a layout. */
  const [maximized, setMaximized] = useState(false);
  /** Whether the active tab sits at the newest output; drives the pill. */
  const [atBottom, setAtBottom] = useState(true);
  /** Output has landed below the parked view since it was parked. */
  const [newOutput, setNewOutput] = useState(false);
  const [selection, setSelection] = useState("");
  const [findOpen, setFindOpen] = useState(false);
  const [findOptions, setFindOptions] = useState<FindOptions>({});
  const [findResults, setFindResults] = useState<{ index: number; count: number } | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [newMenuOpen, setNewMenuOpen] = useState(false);
  const [menuAt, setMenuAt] = useState<{ x: number; y: number } | null>(null);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  /** The label of a directory a shell is being started in, while it is. */
  const [starting, setStarting] = useState<string | null>(null);
  /**
   * BB appends the plugin stylesheet to <head> without awaiting its load, so
   * anything rendered before it arrives paints unstyled — a full-width block of
   * raw markup at the end of <body> that snaps away when the CSS lands. Staying
   * out of the DOM until the window is first opened removes that window
   * entirely, and costs nothing for a session where it is never used.
   */
  const [mounted, setMounted] = useState(false);
  /** One frame behind `mounted`, so the first open still animates in. */
  const [armed, setArmed] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const edgeRefs = useRef(new Map<string, HTMLDivElement>());
  const pumps = useRef(new Map<string, TerminalPump>());
  /**
   * Restarts already in flight. The restart button and the Enter-at-a-dead-
   * prompt path can both fire for the same tab, and each extra call creates a
   * PTY that no tab strip will ever show.
   */
  const restarting = useRef(new Set<string>());
  /** Text waiting for a freshly opened shell's first prompt. */
  const pendingPaste = useRef<{ terminalId: string; text: string } | null>(null);
  const maximizedRef = useRef(false);
  maximizedRef.current = maximized;

  // Geometry lives in a ref (the drag handlers read and write it every pointer
  // move) and is mirrored onto the element directly — re-rendering React 60
  // times a second to move a window is the wrong tool.
  const frameRef = useRef<Frame>(loadFrame());

  const applyFrame = useCallback((next: Frame) => {
    const node = rootRef.current;
    if (sheetRef.current) {
      // Hand geometry back to the stylesheet. Inline styles outrank a class,
      // so leaving the last desktop frame here would pin the sheet to a
      // 760x460 box in the corner.
      //
      // And do not record the frame while the sheet owns layout. Every window
      // resize runs the stored frame through clampFrame, so at phone width the
      // remembered *desktop* geometry was being clamped to the phone's — a
      // window that came back 393px wide the moment the viewport widened again.
      if (node !== null) {
        node.style.removeProperty("left");
        node.style.removeProperty("top");
        node.style.removeProperty("width");
        node.style.removeProperty("height");
      }
      return;
    }
    frameRef.current = next;
    if (node === null) return;
    // Maximized paints its own geometry but must not overwrite the remembered
    // frame — restore has to put the window back exactly where it was.
    const rect = maximizedRef.current
      ? {
          x: MAX_GUTTER,
          y: MAX_GUTTER,
          width: window.innerWidth - 2 * MAX_GUTTER,
          height: window.innerHeight - 2 * MAX_GUTTER,
        }
      : next;
    node.style.left = `${rect.x}px`;
    node.style.top = `${rect.y}px`;
    node.style.width = `${rect.width}px`;
    node.style.height = `${rect.height}px`;
  }, []);

  const commitFrame = useCallback(
    (next: Frame) => {
      applyFrame(next);
      saveFrame(next);
      setFitVersion((version) => version + 1);
    },
    [applyFrame],
  );

  // ------------------------------------------------------------- server io

  // Mirrored into a ref so the stable useCallbacks below read the *current*
  // active tab rather than whichever render created them — otherwise a new
  // shell is always seeded at the 80x24 default instead of the window's real
  // size, and briefly mis-wraps until the first resize lands.
  const activeIdRef = useRef<string | null>(null);
  activeIdRef.current = state.activeId;
  const tabsRef = useRef(state.tabs);
  tabsRef.current = state.tabs;

  const geometry = useCallback(() => {
    const activeId = activeIdRef.current;
    const pump = activeId === null ? null : pumps.current.get(activeId);
    return pump === undefined || pump === null
      ? { cols: DEFAULT_COLS, rows: DEFAULT_ROWS }
      : { cols: pump.cols(), rows: pump.rows() };
  }, []);

  const activePump = useCallback((): TerminalPump | null => {
    const activeId = activeIdRef.current;
    if (activeId === null) return null;
    return pumps.current.get(activeId) ?? null;
  }, []);

  /**
   * Pull the server's view of the world. Its tab list is the only thing that
   * evicts a ghost — a tab whose shell died while the window was closed, or
   * that another bb client closed. Ordering is handled by the snapshot's
   * revision, so a slow reply simply loses to a newer one.
   */
  const sync = useCallback(async () => {
    try {
      const result = await rpc.call("init");
      setScopes(result.scopes);
      setRecentScopeKeys(result.recentScopeKeys);
      setSettingFontSize(result.prefs.fontSize);
      setShortcutEnabled(result.prefs.shortcutEnabled);
      dispatch({ type: "synced", snapshot: result.snapshot });
    } catch {
      toast.error("Floating Terminal could not reach its backend.");
    }
  }, [rpc]);

  /** Ask the server what "here" means for a route. Null when it means nothing. */
  const resolveHere = useCallback(
    async (where: HostContext): Promise<ScopeOption | null> => {
      if (where.projectId === null && where.threadId === null) return null;
      try {
        return (await rpc.call("context", where)).here;
      } catch {
        return null;
      }
    },
    [rpc],
  );

  const openTab = useCallback(
    async (scopeKey: string, label?: string): Promise<string | null> => {
      setStarting(label ?? "a new directory");
      try {
        const result = await rpc.call("openTab", { scopeKey, ...geometry() });
        dispatch({
          type: "synced",
          snapshot: result.snapshot,
          focusId: result.opened.terminalId,
        });
        return result.opened.terminalId;
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Could not start a shell",
        );
        void sync();
        return null;
      } finally {
        setStarting(null);
      }
    },
    [rpc, sync, geometry],
  );

  const pickScope = useCallback(
    (scopeKey: string) => {
      const scope =
        scopes.find((entry) => entry.key === scopeKey) ??
        (here?.key === scopeKey ? here : undefined);
      void openTab(scopeKey, scope?.label);
    },
    [scopes, here, openTab],
  );

  /**
   * A shell where the person is. With nothing to go on — a settings page, a
   * bb too old to report its route — the picker opens instead of guessing.
   */
  const openHere = useCallback(
    async (where: HostContext): Promise<string | null> => {
      const scope = await resolveHere(where);
      if (scope === null) {
        if (tabsRef.current.length > 0) setNewMenuOpen(true);
        return null;
      }
      setHere(scope);
      return openTab(scope.key, scope.label);
    },
    [resolveHere, openTab],
  );

  const closeTab = useCallback(
    async (terminalId: string) => {
      try {
        const result = await rpc.call("closeTab", { terminalId });
        dispatch({ type: "synced", snapshot: result.snapshot });
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Could not close the shell",
        );
        void sync();
      }
    },
    [rpc, sync],
  );

  const restartTab = useCallback(
    async (terminalId: string) => {
      if (restarting.current.has(terminalId)) return;
      restarting.current.add(terminalId);
      try {
        const result = await rpc.call("restartTab", {
          terminalId,
          ...geometry(),
        });
        dispatch({
          type: "synced",
          snapshot: result.snapshot,
          focusId: result.restarted.terminalId,
        });
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Could not restart the shell",
        );
        // The tab is unrecoverable if the server no longer knows it; a resync
        // removes it rather than leaving a dead row the user cannot revive.
        void sync();
      } finally {
        restarting.current.delete(terminalId);
      }
    },
    [rpc, sync, geometry],
  );

  const nameTab = useCallback(
    (terminalId: string, name: string | null) => {
      setRenamingId(null);
      const current = tabsRef.current.find((tab) => tab.terminalId === terminalId);
      if (current === undefined || current.customName === name) return;
      dispatch({ type: "named", terminalId, customName: name });
      void rpc
        .call("nameTab", { terminalId, name })
        .then((result) => dispatch({ type: "synced", snapshot: result.snapshot }))
        .catch((error: unknown) => {
          toast.error(error instanceof Error ? error.message : "Could not rename the tab");
          void sync();
        });
      activePump()?.focus();
    },
    [rpc, sync, activePump],
  );

  const moveTab = useCallback(
    (terminalId: string, toIndex: number) => {
      dispatch({ type: "moved", terminalId, toIndex });
      void rpc
        .call("moveTab", { terminalId, toIndex })
        .then((result) => dispatch({ type: "synced", snapshot: result.snapshot }))
        .catch(() => void sync());
    },
    [rpc, sync],
  );

  useEffect(() => {
    if (sheet) setMaximized(false);
  }, [sheet]);

  useEffect(() => {
    setCtrlArmed(false);
  }, [state.activeId]);

  useEffect(() => {
    windowController.setTabCount(state.tabs.length);
  }, [state.tabs.length]);

  const selectTab = useCallback(
    (terminalId: string) => {
      dispatch({ type: "activated", terminalId });
      void rpc.call("setActiveTab", { terminalId }).catch(() => {
        // Persistence only; the client already switched.
      });
    },
    [rpc],
  );

  /**
   * Cmd/Ctrl+Shift+[ and ] step through the strip with wrap-around. Handled on
   * the window rather than in the pump so it also works with a tab, the picker,
   * or the find bar focused; the pump only declines to eat the key.
   */
  const cycleTab = useCallback(
    (delta: 1 | -1) => {
      const tabs = tabsRef.current;
      if (tabs.length < 2) return;
      const index = tabs.findIndex((tab) => tab.terminalId === activeIdRef.current);
      const next = tabs[(index + delta + tabs.length) % tabs.length];
      if (next !== undefined) selectTab(next.terminalId);
    },
    [selectTab],
  );

  const onWindowKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (!isTabCycleKey(event)) return;
      event.preventDefault();
      const direction = tabCycleDirection(event);
      if (direction !== null) cycleTab(direction);
    },
    [cycleTab],
  );

  // ----------------------------------------------------------------- init

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  // A freshly inserted element has no previous value to transition from, so
  // the entrance is painted in one step unless the closed state renders first.
  useEffect(() => {
    if (!mounted || armed) return;
    const raf = window.requestAnimationFrame(() => setArmed(true));
    return () => window.cancelAnimationFrame(raf);
  }, [mounted, armed]);

  // Every open re-syncs: directories change, and a shell can die while the
  // window is hidden.
  useEffect(() => {
    if (!open) return;
    void sync();
  }, [open, sync]);

  // "Here" follows the route while the window is open, and is re-asked on
  // every open: a thread's worktree can be created after the thread is.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    void resolveHere(context).then((scope) => {
      if (!cancelled) setHere(scope);
    });
    return () => {
      cancelled = true;
    };
  }, [open, context, resolveHere]);

  // ------------------------------------------------------------- gestures

  useEffect(() => {
    const header = headerRef.current;
    // A sheet is pinned to the viewport, and a drag handle across its top would
    // only compete with the scroll gesture underneath it. A maximized window
    // has nowhere to be dragged to.
    if (header === null || sheet || maximized) return;
    const aborter = new AbortController();
    const options = {
      getFrame: () => frameRef.current,
      onChange: applyFrame,
      onCommit: commitFrame,
      onActive: (gesture: "drag" | "resize" | null) => {
        const node = rootRef.current;
        if (node === null) return;
        if (gesture === null) delete node.dataset.gesture;
        else node.dataset.gesture = gesture;
      },
    };
    installDrag(header, options, aborter.signal);
    for (const edge of RESIZE_EDGES) {
      const node = edgeRefs.current.get(edge);
      if (node !== undefined) {
        installResize(node, edge, options, aborter.signal);
      }
    }
    return () => aborter.abort();
  }, [applyFrame, commitFrame, mounted, sheet, maximized]);

  // ---------------------------------------------------------- environment

  useEffect(() => {
    // Coming back from the sheet, re-read the window's own geometry rather than
    // trusting memory: a frame first computed while the viewport was phone-sized
    // (a session that started narrow and was widened) would otherwise become a
    // 360px desktop window. Storage holds the last committed drag, or nothing,
    // in which case loadFrame derives the default for the viewport we are in now.
    applyFrame(sheet ? frameRef.current : loadFrame());
    setFitVersion((version) => version + 1);
  }, [applyFrame, mounted, sheet, maximized]);

  useEffect(() => {
    if (!open) return;
    applyFrame(clampFrame(frameRef.current));
    setFitVersion((version) => version + 1);
  }, [open, applyFrame]);

  useEffect(() => {
    const onResize = () => applyFrame(clampFrame(frameRef.current));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyFrame]);

  // Only the sheet needs this: a desktop window is never covered by a keyboard,
  // and writing the custom properties there would fight the inline geometry.
  useEffect(() => {
    const node = rootRef.current;
    if (!sheet || node === null) return;
    return trackVisualViewport(node, () => {
      // The box just changed under xterm; the pump's ResizeObserver catches the
      // height, this makes sure the active tab is scrolled back to the prompt.
      setFitVersion((version) => version + 1);
    });
  }, [sheet, mounted]);

  useEffect(() => {
    const observer = new MutationObserver(() =>
      setThemeVersion((version) => version + 1),
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!mounted || node === null) return;
    setSurface(resolveTerminalTheme(node).xterm.background ?? null);
  }, [mounted, themeVersion]);

  const openHereRef = useRef(openHere);
  openHereRef.current = openHere;

  useEffect(() => {
    if (!shortcutEnabled) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const chord = windowChord(event);
      if (chord === null) return;
      event.preventDefault();
      if (chord === "toggle") {
        windowController.toggle();
      } else {
        windowController.show();
        void openHereRef.current(hostContext.get());
      }
    };
    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () =>
      window.removeEventListener("keydown", onKeyDown, { capture: true });
  }, [shortcutEnabled]);

  // --------------------------------------------------------------- render

  const onStatus = useCallback(
    (terminalId: string, status: TabStatus, detail: string | null) => {
      dispatch({ type: "status", terminalId, status, detail });
      const waiting = pendingPaste.current;
      if (status === "live" && waiting?.terminalId === terminalId) {
        pendingPaste.current = null;
        window.setTimeout(() => {
          const pump = pumps.current.get(terminalId);
          if (pump !== undefined) pasteInto(pump, waiting.text);
        }, FIRST_PROMPT_SETTLE_MS);
      }
    },
    [],
  );

  const onPumpReady = useCallback((terminalId: string, pump: TerminalPump) => {
    pumps.current.set(terminalId, pump);
  }, []);

  const onPumpGone = useCallback((terminalId: string) => {
    pumps.current.delete(terminalId);
  }, []);

  const onRequestRestart = useCallback(
    (terminalId: string) => void restartTab(terminalId),
    [restartTab],
  );

  // A shell that sets its title on every prompt would otherwise put a rename
  // round trip behind every command, so coalesce and drop no-ops. Keyed by
  // terminal so two busy tabs cannot cancel each other's pending rename.
  const titleTimers = useRef(new Map<string, number>());
  const lastTitles = useRef(new Map<string, string | null>());

  const onTitle = useCallback(
    (terminalId: string, title: string | null) => {
      if (lastTitles.current.get(terminalId) === title) return;
      lastTitles.current.set(terminalId, title);
      // A tab the user named keeps that name; the server ignores the rename
      // anyway, so do not send it.
      const tab = tabsRef.current.find((entry) => entry.terminalId === terminalId);
      if (tab?.customName != null) return;
      const pending = titleTimers.current.get(terminalId);
      if (pending !== undefined) window.clearTimeout(pending);
      titleTimers.current.set(
        terminalId,
        window.setTimeout(() => {
          titleTimers.current.delete(terminalId);
          void rpc
            .call("renameTab", { terminalId, title })
            .then((result) =>
              dispatch({ type: "synced", snapshot: result.snapshot }),
            )
            .catch(() => {
              // A name is cosmetic; let the next snapshot settle it.
            });
        }, TITLE_RENAME_DEBOUNCE_MS),
      );
    },
    [rpc],
  );

  useEffect(
    () => () => {
      for (const timer of titleTimers.current.values()) {
        window.clearTimeout(timer);
      }
    },
    [],
  );

  const hide = useCallback(() => windowController.hide(), []);

  /**
   * A menu that closes under a pointer leaves focus on nothing at all. Put it
   * back at the prompt — unless something in the window took it on purpose
   * (the find field, a rename, the shortcut sheet), or a keyboard close handed
   * it back to the trigger.
   */
  const refocusSoon = useCallback(() => {
    // On a phone, focusing the terminal raises the software keyboard; closing
    // a menu is not a request to type.
    if (sheetRef.current) return;
    window.setTimeout(() => {
      const focused = document.activeElement;
      const root = rootRef.current;
      if (root !== null && focused !== null && focused !== document.body && root.contains(focused)) {
        return;
      }
      if (windowController.isOpen()) activePump()?.focus();
    }, 0);
  }, [activePump]);

  // ----------------------------------------------------------- find in tab
  const [findQuery, setFindQuery] = useState("");
  const findQueryRef = useRef("");
  findQueryRef.current = findQuery;
  const findOptionsRef = useRef<FindOptions>({});
  findOptionsRef.current = findOptions;

  const openFind = useCallback(() => {
    if (activePump()?.searchAvailable() !== true) return;
    setFindOpen(true);
  }, [activePump]);

  const closeFind = useCallback(() => {
    setFindOpen(false);
    setFindResults(null);
    const pump = activePump();
    pump?.clearSearch();
    pump?.focus();
  }, [activePump]);

  const onFindQueryChange = useCallback(
    (query: string) => {
      setFindQuery(query);
      const pump = activePump();
      if (pump === null) return;
      if (query === "") {
        pump.clearSearch();
        setFindResults(null);
        return;
      }
      pump.findNext(query, findOptionsRef.current, true);
    },
    [activePump],
  );

  const onFindOptionsChange = useCallback(
    (options: FindOptions) => {
      setFindOptions(options);
      const pump = activePump();
      if (pump === null || findQueryRef.current === "") return;
      pump.clearSearch();
      pump.findNext(findQueryRef.current, options, true);
    },
    [activePump],
  );

  const onFindNext = useCallback(() => {
    activePump()?.findNext(findQueryRef.current, findOptionsRef.current);
  }, [activePump]);

  const onFindPrevious = useCallback(() => {
    activePump()?.findPrevious(findQueryRef.current, findOptionsRef.current);
  }, [activePump]);

  const onSearchResults = useCallback(
    (_terminalId: string, results: { index: number; count: number } | null) => {
      setFindResults(results);
    },
    [],
  );

  // A search belongs to the buffer it ran in; switching tabs closes it rather
  // than replaying a stale query over a different shell.
  const lastActiveRef = useRef<string | null>(null);
  useEffect(() => {
    const previous = lastActiveRef.current;
    lastActiveRef.current = state.activeId;
    if (previous !== null && previous !== state.activeId) {
      pumps.current.get(previous)?.clearSearch();
      setFindOpen(false);
      setFindResults(null);
    }
  }, [state.activeId]);

  const onScrollState = useCallback(
    (terminalId: string, tabAtBottom: boolean, tabNewOutput: boolean) => {
      if (terminalId !== activeIdRef.current) return;
      setAtBottom(tabAtBottom);
      setNewOutput(tabNewOutput);
    },
    [],
  );

  const onActivity = useCallback(
    (terminalId: string, activity: "output" | "bell") => {
      // The window being hidden is "not looking" too, for the bell at least.
      if (terminalId === activeIdRef.current && windowController.isOpen()) return;
      dispatch({ type: "activity", terminalId, activity });
    },
    [],
  );

  const onSelection = useCallback((terminalId: string, text: string) => {
    if (terminalId === activeIdRef.current) setSelection(text);
  }, []);

  const onContextMenu = useCallback((terminalId: string, x: number, y: number) => {
    // The sheet has no right-click menu of its own; leave the platform's.
    if (sheetRef.current || terminalId !== activeIdRef.current) return false;
    const body = bodyRef.current;
    if (body === null) return false;
    const rect = body.getBoundingClientRect();
    setMenuAt({ x: x - rect.left, y: y - rect.top });
    return true;
  }, []);

  // Switching tabs: the pill and selection state belong to the new tab, and
  // until its pump reports otherwise the safe assumption is "at the prompt".
  useEffect(() => {
    setAtBottom(true);
    setNewOutput(false);
    setSelection("");
    setMenuAt(null);
  }, [state.activeId]);

  // ------------------------------------------------------- text in and out

  /**
   * Hand text to the agent: into the composer of the thread in view, fenced,
   * with focus there so the question can be typed straight after it.
   */
  const sendToAgent = useCallback((text: string) => {
    const body = text.replace(/\s+$/, "");
    if (body === "") return;
    const composer = composerBridge.pick(hostContext.get().threadId);
    if (composer === null) {
      copyText(body);
      toast("Copied — there is no composer on screen to send it to.");
      return;
    }
    composer.insert(quoteForAgent(body), { at: "end", block: true });
    composer.focus();
    // A sheet covers the composer it just wrote into.
    if (sheetRef.current) windowController.hide();
    toast.success("Added to the composer");
  }, []);

  const sendActiveToAgent = useCallback(() => {
    const pump = activePump();
    if (pump === null) return;
    const picked = pump.getSelection();
    const text =
      picked.trim() !== ""
        ? picked
        : pump.allText().split("\n").slice(-AGENT_TAIL_LINES).join("\n");
    pump.clearSelection();
    sendToAgent(text);
  }, [activePump, sendToAgent]);

  const copyAll = useCallback(() => {
    const text = activePump()?.allText() ?? "";
    if (text === "") {
      toast("Nothing to copy yet.");
      return;
    }
    copyText(text);
    toast.success("Copied the whole scrollback");
  }, [activePump]);

  const pasteFromClipboard = useCallback(() => {
    const pump = activePump();
    if (pump === null) return;
    void navigator.clipboard
      ?.readText()
      .then((text) => {
        if (text !== "") pump.paste(text);
        pump.focus();
      })
      .catch(() => {
        toast.error("Clipboard is not available here.");
      });
  }, [activePump]);

  const clearActive = useCallback(() => {
    const pump = activePump();
    pump?.clear();
    pump?.focus();
  }, [activePump]);

  // -------------------------------------------------------- commands from bb

  const handleCommand = useCallback(
    (command: WindowCommand) => {
      switch (command.kind) {
        case "new-here":
          void openHere(command.context);
          return;
        case "pick":
          // The empty state is already the picker; otherwise open the + menu
          // once the window has painted, so it has an anchor to drop from.
          if (tabsRef.current.length > 0) {
            window.requestAnimationFrame(() => setNewMenuOpen(true));
          }
          return;
        case "paste": {
          const pump = activePump();
          if (pump !== null) {
            pasteInto(pump, command.text);
            return;
          }
          void openHere(command.context).then((terminalId) => {
            if (terminalId === null) {
              copyText(command.text);
              toast("Copied — pick a directory and paste it into the new shell.");
              return;
            }
            pendingPaste.current = { terminalId, text: command.text };
          });
          return;
        }
        case "restart":
          if (activeIdRef.current !== null) void restartTab(activeIdRef.current);
          return;
        case "clear":
          clearActive();
          return;
        case "find":
          window.requestAnimationFrame(openFind);
          return;
      }
    },
    [openHere, activePump, restartTab, clearActive, openFind],
  );

  useEffect(() => windowController.setHandler(handleCommand), [handleCommand]);

  // ------------------------------------------------------------ key toolbar

  const onToolbarKey = useCallback(
    (key: ToolbarKey) => {
      const pump = activePump();
      if (pump === null) return;
      switch (key.kind) {
        case "send":
          pump.send(key.send ?? "");
          return;
        case "arrow":
          pump.send(
            arrowSequence(key.direction ?? "up", pump.applicationCursorKeys()),
          );
          return;
        case "modifier":
          pump.setCtrlArmed(!ctrlArmed);
          return;
        case "action":
          if (key.id === "dismiss") {
            pump.blur();
            return;
          }
          if (key.id === "find") {
            openFind();
            return;
          }
          if (key.id === "paste") pasteFromClipboard();
          return;
      }
    },
    [activePump, ctrlArmed, openFind, pasteFromClipboard],
  );

  const onCtrlArmed = useCallback((value: boolean) => setCtrlArmed(value), []);

  const onNewHereRequested = useCallback(() => {
    void openHereRef.current(hostContext.get());
  }, []);

  const onFontSize = useCallback((next: number | null) => {
    const value = next === null ? null : clampFontSize(next);
    setFontOverride(value);
    saveFontOverride(value);
  }, []);

  const onSnap = useCallback(
    (target: SnapTarget) => {
      setMaximized(false);
      commitFrame(snapFrame(target));
    },
    [commitFrame],
  );

  // A bare ~ means nothing once there is more than one machine.
  const showHosts = new Set(scopes.map((scope) => scope.hostName)).size > 1;
  const activeTab = state.tabs.find((tab) => tab.terminalId === state.activeId) ?? null;
  const hasSelection = selection.trim() !== "";

  if (!mounted) return null;

  return (
    <TooltipProvider delayDuration={400} skipDelayDuration={250}>
      {/* Only the sheet gets a scrim. The desktop window is deliberately
          non-modal — bb stays usable behind it — but at this width the sheet
          covers nearly everything, so a blurred backdrop is what makes it read
          as one layer above the app rather than a panel welded to it. */}
      {sheet ? (
        <div
          className="bb-ft-backdrop"
          data-state={open && armed ? "open" : "closed"}
          aria-hidden="true"
          onPointerDown={hide}
        />
      ) : null}
      <div
        ref={rootRef}
        role="dialog"
        // Non-modal on purpose: the point of this window is that bb stays
        // usable behind it, so it must not read as a focus trap.
        aria-modal="false"
        aria-label="Floating terminal"
        aria-hidden={!open}
        data-state={open && armed ? "open" : "closed"}
        data-layout={sheet ? "sheet" : "window"}
        data-maximized={maximized ? "" : undefined}
        onKeyDown={onWindowKeyDown}
        // Stacking lives in styles.css, where the backdrop and window are kept in
        // one place relative to bb's own layers.
        className="bb-ft-window fixed"
      >
        <div className="bb-ft-surface flex size-full flex-col overflow-hidden text-card-foreground">
          <div
            ref={headerRef}
            data-bb-ft-handle=""
            // The title-bar convention from every desktop OS. Interactive
            // children (tabs, buttons, the picker) stop the double-click the
            // same way they stop the drag.
            onDoubleClick={(event) => {
              if (sheet) return;
              const target = event.target as HTMLElement | null;
              if (target?.closest("[data-no-drag]") != null) return;
              setMaximized((value) => !value);
            }}
          >
            <TabBar
              tabs={state.tabs}
              activeId={state.activeId}
              scopes={scopes}
              recentScopeKeys={recentScopeKeys}
              here={here}
              showHosts={showHosts}
              maximize={
                sheet
                  ? null
                  : {
                      on: maximized,
                      toggle: () => setMaximized((value) => !value),
                    }
              }
              newMenuOpen={newMenuOpen}
              onNewMenuOpenChange={(next) => {
                setNewMenuOpen(next);
                if (next) void resolveHere(hostContext.get()).then(setHere);
                else refocusSoon();
              }}
              renamingId={renamingId}
              onSelect={selectTab}
              onClose={(terminalId) => void closeTab(terminalId)}
              onNewTab={pickScope}
              onStartRename={(terminalId) => {
                selectTab(terminalId);
                setRenamingId(terminalId);
              }}
              onRename={nameTab}
              onCancelRename={() => {
                setRenamingId(null);
                activePump()?.focus();
              }}
              onMove={moveTab}
              onHide={hide}
              actions={
                <WindowMenu
                  hasTab={activeTab !== null}
                  onRename={() => {
                    if (activeTab !== null) setRenamingId(activeTab.terminalId);
                  }}
                  onRestart={() => {
                    if (state.activeId !== null) void restartTab(state.activeId);
                  }}
                  onClear={clearActive}
                  onFind={openFind}
                  onCopyAll={copyAll}
                  onSendToAgent={composerAvailable ? sendActiveToAgent : null}
                  fontSize={fontSize}
                  fontCustomised={fontOverride !== null}
                  onFontSize={onFontSize}
                  layout={
                    sheet
                      ? null
                      : {
                          maximized,
                          onToggleMaximize: () => setMaximized((value) => !value),
                          onSnap,
                        }
                  }
                  onShortcuts={() => setShortcutsOpen(true)}
                  onClosed={refocusSoon}
                />
              }
            />
          </div>

          <div
            ref={bodyRef}
            className="bb-ft-body relative min-h-0 flex-1"
            style={surface === null ? undefined : { backgroundColor: surface }}
          >
            {state.tabs.map((tab) => (
              <TerminalView
                key={tab.terminalId}
                rpc={rpc}
                terminalId={tab.terminalId}
                mode={
                  !open
                    ? "paused"
                    : tab.terminalId === state.activeId
                      ? "active"
                      : "background"
                }
                fontSize={fontSize}
                themeVersion={themeVersion}
                fitVersion={fitVersion}
                onStatus={onStatus}
                onTitle={onTitle}
                onCtrlArmed={onCtrlArmed}
                onFindRequested={openFind}
                onScrollState={onScrollState}
                onSearchResults={onSearchResults}
                onActivity={onActivity}
                onSelection={onSelection}
                onContextMenu={onContextMenu}
                onRequestRestart={onRequestRestart}
                onToggleRequested={hide}
                onNewHereRequested={onNewHereRequested}
                copyText={copyText}
                onPumpReady={onPumpReady}
                onPumpGone={onPumpGone}
              />
            ))}
            {findOpen && state.tabs.length > 0 ? (
              <FindBar
                query={findQuery}
                options={findOptions}
                results={findResults}
                onQueryChange={onFindQueryChange}
                onOptionsChange={onFindOptionsChange}
                onNext={onFindNext}
                onPrevious={onFindPrevious}
                onClose={closeFind}
              />
            ) : null}

            {state.tabs.length > 0 ? (
              <PillBar>
                {hasSelection ? (
                  <>
                    <Pill
                      icon="Copy"
                      onClick={() => {
                        if (activePump()?.copySelection() === true) toast.success("Copied");
                      }}
                    >
                      Copy
                    </Pill>
                    {composerAvailable ? (
                      <Pill icon="Sent" tone="accent" onClick={sendActiveToAgent}>
                        Ask the agent
                      </Pill>
                    ) : null}
                  </>
                ) : !atBottom ? (
                  // Parked in history while output may still be arriving below.
                  <Pill
                    icon="ChevronsDown"
                    tone={newOutput ? "accent" : undefined}
                    onClick={() => {
                      activePump()?.scrollToBottom();
                      activePump()?.focus();
                    }}
                  >
                    {newOutput ? "New output" : "Latest"}
                  </Pill>
                ) : null}
                {starting !== null ? (
                  <span className="bb-ft-pill bb-ft-pill-quiet" aria-live="polite">
                    <span className="bb-ft-spinner bb-ft-spinner-small" aria-hidden="true" />
                    Starting {starting}…
                  </span>
                ) : null}
              </PillBar>
            ) : null}

            {state.tabs.length === 0 ? (
              <EmptyState
                scopes={scopes}
                recentScopeKeys={recentScopeKeys}
                here={here}
                showHosts={showHosts}
                starting={starting}
                onPick={pickScope}
              />
            ) : null}

            {state.tabs.length > 0 && !sheet ? (
              <TerminalMenu
                at={menuAt}
                hasSelection={hasSelection}
                canSendToAgent={composerAvailable}
                onOpenChange={(next) => {
                  if (!next) {
                    setMenuAt(null);
                    refocusSoon();
                  }
                }}
                onCopy={() => void activePump()?.copySelection()}
                onPaste={pasteFromClipboard}
                onSelectAll={() => activePump()?.selectAll()}
                onSendToAgent={sendActiveToAgent}
                onFind={openFind}
                onClear={clearActive}
              />
            ) : null}

            {shortcutsOpen ? (
              <ShortcutsPanel
                onClose={() => {
                  setShortcutsOpen(false);
                  activePump()?.focus();
                }}
              />
            ) : null}
          </div>

          {/* Only where the keys are actually missing, and only once there is a
              shell to send them to. */}
          {sheet && state.tabs.length > 0 ? (
            <KeyToolbar ctrlArmed={ctrlArmed} onKey={onToolbarKey} />
          ) : null}
        </div>

        {sheet || maximized
          ? null
          : RESIZE_EDGES.map((edge) => (
              <div
                key={edge}
                ref={(node) => {
                  if (node === null) edgeRefs.current.delete(edge);
                  else edgeRefs.current.set(edge, node);
                }}
                className="bb-ft-edge"
                data-bb-ft-edge={edge}
                aria-hidden="true"
              />
            ))}
      </div>
    </TooltipProvider>
  );
}

/**
 * Type text in at the prompt. A shell that has not asked for bracketed paste
 * would run a multi-line paste line by line as it lands, so that case goes to
 * the clipboard instead and the person pastes it when they are ready.
 */
function pasteInto(pump: TerminalPump, text: string): void {
  if (text.includes("\n") && !pump.bracketedPaste()) {
    copyText(text);
    toast("Copied instead of pasted", {
      description:
        "This shell would run a multi-line paste line by line. Paste it yourself when you are ready.",
    });
    return;
  }
  pump.paste(text);
  pump.focus();
}

