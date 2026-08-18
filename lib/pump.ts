// The pump between one xterm instance and one bb terminal session.
//
// bb exposes terminal output as a sequence-numbered buffer rather than a plugin
// stream, so this polls — fast while bytes are moving, backing off to a slow
// heartbeat when the shell is quiet, and stopping entirely while its tab is
// hidden (the session keeps running server-side and is caught up on return).
//
// One pump per tab, owned by a TerminalView effect. The pump knows nothing
// about tabs or windows; it reports status upward and asks for a restart when
// the user presses Enter at a dead prompt.
import { FitAddon } from "@xterm/addon-fit";
import { Terminal } from "@xterm/xterm";
import type { PluginRpcClient } from "@bb/plugin-sdk/app";
import type { rpcContract } from "../server";
import type { TabStatus } from "./tabs";
import { resolveMonoFont, resolveTerminalTheme } from "./theme";

type Rpc = PluginRpcClient<typeof rpcContract>;

/** Poll cadence, in ms: snappy under load, cheap when idle. */
const FAST_INTERVAL = 40;
const SLOW_INTERVAL = 320;
/** Coalesce burst keystrokes and pastes into one request. */
const INPUT_FLUSH_MS = 4;
const RESIZE_DEBOUNCE_MS = 90;

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function bytesToBase64(bytes: Uint8Array): string {
  // Chunked so a large paste cannot blow the argument limit of fromCharCode.
  let binary = "";
  const step = 8192;
  for (let index = 0; index < bytes.length; index += step) {
    binary += String.fromCharCode(...bytes.subarray(index, index + step));
  }
  return btoa(binary);
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
}

export class TerminalPump {
  private readonly terminal: Terminal;
  private readonly fitAddon = new FitAddon();
  private readonly options: PumpOptions;
  private readonly encoder = new TextEncoder();

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
  private visible = false;
  private started = false;
  private disposed = false;

  constructor(options: PumpOptions) {
    this.options = options;
    const theme = resolveTerminalTheme(options.container);

    this.terminal = new Terminal({
      fontSize: options.fontSize,
      fontFamily: resolveMonoFont(options.container),
      theme: theme.xterm,
      cursorBlink: true,
      scrollback: 5000,
      // Trim the default row gap; the window is small and vertical space is
      // the scarcest thing in it.
      lineHeight: 1.15,
    });
    this.terminal.loadAddon(this.fitAddon);
    this.terminal.open(options.container);

    this.terminal.onData((data) => {
      if (this.status === "exited" && data.includes("\r")) {
        // Latched: the pump stays "exited" for the whole restart round trip,
        // so without this every extra Enter fires another restart, and each
        // one creates a PTY the tab strip will never show.
        if (this.restartRequested) return;
        this.restartRequested = true;
        this.options.onRequestRestart();
        return;
      }
      this.queueInput(data);
    });

    this.terminal.onResize(({ cols, rows }) => {
      this.scheduleResize(cols, rows);
    });

    this.terminal.attachCustomKeyEventHandler((event) => {
      if (event.type !== "keydown") return true;
      if (event.ctrlKey && event.key === "`") {
        this.options.onToggleRequested();
        return false;
      }
      // Cmd/Ctrl+C must stay SIGINT unless there is something to copy.
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key === "c" &&
        this.terminal.hasSelection()
      ) {
        void navigator.clipboard?.writeText(this.terminal.getSelection());
        return false;
      }
      if (event.metaKey && event.key === "k") {
        this.terminal.clear();
        return false;
      }
      return true;
    });
  }

  private setStatus(status: TabStatus, detail: string | null = null): void {
    if (this.status === status && detail === null) return;
    this.status = status;
    this.options.onStatus(status, detail);
  }

  private queueInput(data: string): void {
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

    const dataBase64 = bytesToBase64(this.encoder.encode(pending));
    // Chained so keystrokes reach the pty in the order they were typed.
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
      });
    // Any keystroke pulls polling back to its fastest.
    this.interval = FAST_INTERVAL;
    if (this.pollTimer !== null) this.schedule(FAST_INTERVAL);
  }

  private scheduleResize(cols: number, rows: number): void {
    if (this.resizeTimer !== null) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.resizeTimer = null;
      if (this.disposed) return;
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
    if (this.disposed || !this.visible || !this.started) return;
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
    if (this.disposed || !this.visible || this.reading) return;
    this.reading = true;
    let next: "schedule" | "replay" | "stop" = "schedule";

    try {
      const result = await this.options.rpc.call("read", {
        terminalId: this.options.terminalId,
        sinceSeq: this.nextSeq,
      });

      if (this.disposed) {
        next = "stop";
      } else if (result.truncated && this.nextSeq > 0) {
        // The ring buffer wrapped past our cursor while this tab was hidden;
        // redraw from the tail rather than splicing a hole into scrollback.
        next = "replay";
      } else {
        for (const chunk of result.chunks) {
          this.terminal.write(base64ToBytes(chunk.dataBase64));
        }
        this.nextSeq = result.nextSeq;

        if (result.chunks.length > 0) {
          this.interval = FAST_INTERVAL;
          if (this.status !== "live") this.setStatus("live");
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
      if (this.disposed) {
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
      if (!this.disposed) {
        this.terminal.reset();
        for (const chunk of result.chunks) {
          this.terminal.write(base64ToBytes(chunk.dataBase64));
        }
        this.nextSeq = result.nextSeq;
        this.interval = FAST_INTERVAL;
        this.setStatus("live");
        ok = true;
      }
    } catch (error) {
      if (!this.disposed) {
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
    void this.replay();
  }

  /** Visible drives polling: hidden tabs cost nothing. */
  setVisible(visible: boolean): void {
    if (this.visible === visible) return;
    this.visible = visible;
    if (visible) {
      this.fit();
      this.interval = FAST_INTERVAL;
      this.schedule(0);
    } else {
      this.stopPolling();
    }
  }

  fit(): void {
    if (this.disposed) return;
    const { clientWidth, clientHeight } = this.options.container;
    if (clientWidth === 0 || clientHeight === 0) return;
    try {
      this.fitAddon.fit();
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
    this.stopPolling();
    if (this.flushTimer !== null) window.clearTimeout(this.flushTimer);
    if (this.resizeTimer !== null) window.clearTimeout(this.resizeTimer);
    this.terminal.dispose();
  }
}
