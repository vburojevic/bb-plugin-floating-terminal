// A push connection to one bb terminal session — the socket bb's own terminal
// panel uses.
//
// The RPC path has to poll: a keystroke goes out as one HTTP request, and its
// echo only comes back on the next read, which can be a full idle interval
// away. bb's panel instead holds `/ws/terminals/:id` open, sends keystrokes up
// it the moment they are typed and gets output pushed down it the moment the
// pty writes. The window runs inside bb's own page, so the socket is
// same-origin and passes bb's origin check exactly as the panel's does.
//
// One instance is one connection. Reconnecting, and falling back to polling
// when the socket is not on offer at all, belong to the pump; this only speaks
// the wire protocol and reports what happened.
//
// Only the parts of the protocol every bb since 0.36 speaks are used (the
// plugin itself now needs bb 0.49, for the @get-bb/plugin-sdk runtime):
//   - `sinceSeq` and `attached.replayStartSeq` arrived in 0.36. A 0.35 server
//     attaches without `replayStartSeq`, which is reported as null and makes
//     the pump poll instead.
//   - Output acks (`outputAcks=1`, `{type:"ack"}`) arrived in 0.46, and an
//     older server answers an unknown message by closing the socket — so this
//     never asks for them. Output is then paced the way it was for every bb
//     client before 0.46: a client that falls far behind is dropped by the
//     server, and the pump reconnects and resumes from where it was.

/** WebSocket.OPEN, without depending on the global existing (tests, SSR). */
const OPEN = 1;
const HEARTBEAT_INTERVAL_MS = 15_000;
const HEARTBEAT_TIMEOUT_MS = 45_000;

/** Errors after which reconnecting cannot help: the session is not there. */
const GONE_CODES = new Set(["terminal_not_found", "terminal_exited"]);

export interface SocketLike {
  readonly readyState: number;
  onopen: ((event: unknown) => void) | null;
  onmessage: ((event: { data: unknown }) => void) | null;
  onerror: ((event: unknown) => void) | null;
  onclose: ((event: unknown) => void) | null;
  send(data: string): void;
  close(code?: number, reason?: string): void;
}

export interface SessionInfo {
  status: string;
  exitCode: number | null;
}

export interface TerminalSocketHandlers {
  /**
   * The server is about to stream. `replayStartSeq` above the requested
   * `sinceSeq` means the ring buffer has already dropped bytes in between;
   * chunks below `nextSeq` are retained output being replayed.
   */
  onAttached(info: {
    /** Null from a bb that predates resumable attach (0.35). */
    replayStartSeq: number | null;
    nextSeq: number;
    session: SessionInfo;
  }): void;
  onOutput(seq: number, dataBase64: string): void;
  onExited(session: SessionInfo): void;
  /** The session is gone or not running; reconnecting will not bring it back. */
  onGone(code: string, message: string): void;
  /** The connection ended without dispose(). `attached` says whether it ever streamed. */
  onClosed(attached: boolean): void;
}

export interface TerminalSocketOptions {
  url: string;
  handlers: TerminalSocketHandlers;
  createSocket?: (url: string) => SocketLike;
  now?: () => number;
}

/** Same-origin socket URL for a session, resuming after `sinceSeq`. */
export function terminalSocketUrl(
  location: { protocol: string; host: string },
  terminalId: string,
  sinceSeq: number,
): string {
  const scheme = location.protocol === "https:" ? "wss:" : "ws:";
  const id = encodeURIComponent(terminalId);
  return `${scheme}//${location.host}/ws/terminals/${id}?sinceSeq=${sinceSeq}`;
}

export interface AttachPlan {
  /** The ring buffer moved past the cursor: clear the terminal and redraw. */
  reset: boolean;
  /** The seq to write from next; chunks below it were already written. */
  cursor: number;
  /** Chunks below this are retained output being replayed, written muted. */
  replayUntilSeq: number | null;
}

/**
 * How to take up a stream the server just attached. `cursor` is the seq the
 * terminal has written up to, 0 for nothing yet; the rest is what `attached`
 * said.
 */
export function planAttach(
  cursor: number,
  replayStartSeq: number,
  nextSeq: number,
): AttachPlan {
  const fresh = cursor === 0;
  const wrapped = !fresh && replayStartSeq > cursor;
  if (!fresh && !wrapped) {
    // Resuming: everything at or past the cursor is new output.
    return { reset: false, cursor, replayUntilSeq: null };
  }
  return {
    reset: wrapped,
    cursor: replayStartSeq,
    replayUntilSeq: nextSeq > replayStartSeq ? nextSeq : null,
  };
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : null;
}

function sessionInfo(value: unknown): SessionInfo {
  const session = asRecord(value);
  const status = typeof session?.status === "string" ? session.status : "running";
  const exitCode = typeof session?.exitCode === "number" ? session.exitCode : null;
  return { status, exitCode };
}

export class TerminalSocket {
  private readonly socket: SocketLike;
  private readonly handlers: TerminalSocketHandlers;
  private readonly now: () => number;
  private heartbeat: ReturnType<typeof setInterval> | null = null;
  private lastPongAt = 0;
  private closed = false;
  /** True once the server said "attached"; until then nothing is streaming. */
  attached = false;

  constructor(options: TerminalSocketOptions) {
    this.handlers = options.handlers;
    this.now = options.now ?? Date.now;
    const create =
      options.createSocket ?? ((url: string) => new WebSocket(url) as unknown as SocketLike);
    this.socket = create(options.url);
    this.socket.onopen = () => this.handleOpen();
    this.socket.onmessage = (event) => this.handleMessage(event.data);
    this.socket.onerror = () => undefined;
    this.socket.onclose = () => this.handleClose();
  }

  /** Whether input sent now goes straight to the pty. */
  ready(): boolean {
    return !this.closed && this.attached && this.socket.readyState === OPEN;
  }

  sendInput(dataBase64: string): boolean {
    return this.send({ type: "input", dataBase64 });
  }

  sendResize(cols: number, rows: number): boolean {
    return this.send({ type: "resize", cols, rows });
  }

  /** Close without reporting it: the owner chose this. */
  dispose(): void {
    if (this.closed) return;
    this.closed = true;
    this.stopHeartbeat();
    this.socket.onopen = null;
    this.socket.onmessage = null;
    this.socket.onerror = null;
    this.socket.onclose = null;
    try {
      this.socket.close();
    } catch {
      // Already closing.
    }
  }

  private send(message: Record<string, unknown>): boolean {
    if (this.closed || this.socket.readyState !== OPEN) return false;
    try {
      this.socket.send(JSON.stringify(message));
      return true;
    } catch {
      return false;
    }
  }

  private handleOpen(): void {
    if (this.closed) return;
    this.lastPongAt = this.now();
    this.heartbeat = setInterval(() => {
      if (this.now() - this.lastPongAt > HEARTBEAT_TIMEOUT_MS) {
        // A half-open connection never fires close on its own.
        try {
          this.socket.close(4000, "heartbeat-timeout");
        } catch {
          this.handleClose();
        }
        return;
      }
      this.send({ type: "ping" });
    }, HEARTBEAT_INTERVAL_MS);
  }

  private handleMessage(raw: unknown): void {
    if (this.closed || typeof raw !== "string") return;
    let message: Record<string, unknown> | null;
    try {
      message = asRecord(JSON.parse(raw));
    } catch {
      return;
    }
    if (message === null) return;

    switch (message.type) {
      case "pong":
        this.lastPongAt = this.now();
        return;
      case "attached": {
        this.attached = true;
        this.lastPongAt = this.now();
        this.handlers.onAttached({
          replayStartSeq:
            typeof message.replayStartSeq === "number" ? message.replayStartSeq : null,
          nextSeq: typeof message.nextSeq === "number" ? message.nextSeq : 0,
          session: sessionInfo(message.session),
        });
        return;
      }
      case "output": {
        const chunk = asRecord(message.chunk);
        if (
          chunk === null ||
          typeof chunk.seq !== "number" ||
          typeof chunk.dataBase64 !== "string"
        ) {
          return;
        }
        this.handlers.onOutput(chunk.seq, chunk.dataBase64);
        return;
      }
      case "exited":
        this.handlers.onExited(sessionInfo(message.session));
        this.dispose();
        return;
      case "error": {
        const code = typeof message.code === "string" ? message.code : "error";
        const text = typeof message.message === "string" ? message.message : code;
        if (GONE_CODES.has(code) || code === "terminal_not_running") {
          this.handlers.onGone(code, text);
          this.dispose();
        } else if (!this.attached) {
          // A failed attach (it timed out, the host dropped) leaves the socket
          // open but unregistered, and bb still answers its pings: nothing
          // would ever stream. Close it as one that never attached, so the
          // pump retries and, if that keeps failing, polls.
          this.dispose();
          this.handlers.onClosed(false);
        }
        // After attaching, anything else is followed by a close, which reports it.
        return;
      }
      default:
        // session-updated, and anything a newer bb adds.
        return;
    }
  }

  private handleClose(): void {
    if (this.closed) return;
    this.closed = true;
    this.stopHeartbeat();
    this.handlers.onClosed(this.attached);
  }

  private stopHeartbeat(): void {
    if (this.heartbeat === null) return;
    clearInterval(this.heartbeat);
    this.heartbeat = null;
  }
}
