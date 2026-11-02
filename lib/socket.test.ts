// The push socket's wire handling.
//
// Every mistake here is silent in the UI: a misread chunk drops output, a
// message an older bb does not know makes it close the socket, and a close
// reported as "attached" keeps the pump retrying a socket it should have given
// up on and polled instead.
import { describe, expect, it, vi } from "vitest";
import {
  TerminalSocket,
  terminalSocketUrl,
  type SocketLike,
  type TerminalSocketHandlers,
} from "./socket";

class FakeSocket implements SocketLike {
  readyState = 0;
  sent: Record<string, unknown>[] = [];
  closed = false;
  onopen: SocketLike["onopen"] = null;
  onmessage: SocketLike["onmessage"] = null;
  onerror: SocketLike["onerror"] = null;
  onclose: SocketLike["onclose"] = null;

  send(data: string): void {
    this.sent.push(JSON.parse(data) as Record<string, unknown>);
  }
  close(): void {
    this.closed = true;
    this.readyState = 3;
  }
  open(): void {
    this.readyState = 1;
    this.onopen?.({});
  }
  receive(message: unknown): void {
    this.onmessage?.({ data: JSON.stringify(message) });
  }
  drop(): void {
    this.readyState = 3;
    this.onclose?.({});
  }
}

function setup() {
  const fake = new FakeSocket();
  const handlers: TerminalSocketHandlers = {
    onAttached: vi.fn(),
    onOutput: vi.fn(),
    onExited: vi.fn(),
    onGone: vi.fn(),
    onClosed: vi.fn(),
  };
  const socket = new TerminalSocket({
    url: "ws://bb.test/ws/terminals/t1",
    handlers,
    createSocket: () => fake,
  });
  return { fake, handlers, socket };
}

const session = { id: "t1", status: "running", exitCode: null };

describe("terminalSocketUrl", () => {
  it("resumes after the given seq, on the page's own origin", () => {
    expect(
      terminalSocketUrl({ protocol: "https:", host: "me.getbb.app" }, "term 1", 42),
    ).toBe("wss://me.getbb.app/ws/terminals/term%201?sinceSeq=42");
    expect(
      terminalSocketUrl({ protocol: "http:", host: "localhost:3000" }, "t", 0),
    ).toBe("ws://localhost:3000/ws/terminals/t?sinceSeq=0");
  });

  it("never asks for output acks, which bb before 0.46 rejects", () => {
    expect(
      terminalSocketUrl({ protocol: "http:", host: "h" }, "t", 0),
    ).not.toContain("outputAcks");
  });
});

describe("TerminalSocket", () => {
  it("is not ready for input until the server attaches", () => {
    const { fake, socket } = setup();
    expect(socket.ready()).toBe(false);
    fake.open();
    expect(socket.ready()).toBe(false);
    expect(socket.sendInput("bHM=")).toBe(true);
    fake.receive({ type: "attached", session, replayStartSeq: 3, nextSeq: 9 });
    expect(socket.ready()).toBe(true);
  });

  it("reports attach, output and exit as the server sends them", () => {
    const { fake, handlers } = setup();
    fake.open();
    fake.receive({ type: "attached", session, replayStartSeq: 3, nextSeq: 9 });
    expect(handlers.onAttached).toHaveBeenCalledWith({
      replayStartSeq: 3,
      nextSeq: 9,
      session: { status: "running", exitCode: null },
    });

    fake.receive({ type: "output", chunk: { seq: 9, dataBase64: "aGk=" } });
    expect(handlers.onOutput).toHaveBeenCalledWith(9, "aGk=");

    fake.receive({ type: "exited", session: { ...session, status: "exited", exitCode: 2 } });
    expect(handlers.onExited).toHaveBeenCalledWith({ status: "exited", exitCode: 2 });
    // Exit is final: the socket closes itself without a second report.
    expect(fake.closed).toBe(true);
    expect(handlers.onClosed).not.toHaveBeenCalled();
  });

  it("ignores malformed frames rather than throwing", () => {
    const { fake, handlers } = setup();
    fake.open();
    fake.onmessage?.({ data: "not json" });
    fake.receive({ type: "output", chunk: { seq: "x" } });
    fake.receive({ type: "session-updated", session });
    expect(handlers.onOutput).not.toHaveBeenCalled();
  });

  it("treats a missing session as gone, and other errors as a close to come", () => {
    const { fake, handlers } = setup();
    fake.open();
    fake.receive({ type: "error", code: "forbidden_origin", message: "no" });
    expect(handlers.onGone).not.toHaveBeenCalled();
    fake.receive({ type: "error", code: "terminal_not_found", message: "gone" });
    expect(handlers.onGone).toHaveBeenCalledWith("terminal_not_found", "gone");
    expect(fake.closed).toBe(true);
  });

  it("says whether a dropped connection had ever attached", () => {
    const refused = setup();
    refused.fake.drop();
    expect(refused.handlers.onClosed).toHaveBeenCalledWith(false);

    const dropped = setup();
    dropped.fake.open();
    dropped.fake.receive({ type: "attached", session, replayStartSeq: 0, nextSeq: 0 });
    dropped.fake.drop();
    expect(dropped.handlers.onClosed).toHaveBeenCalledWith(true);
  });

  it("stays quiet when its owner closes it", () => {
    const { fake, handlers, socket } = setup();
    fake.open();
    socket.dispose();
    fake.drop();
    expect(fake.closed).toBe(true);
    expect(handlers.onClosed).not.toHaveBeenCalled();
    expect(socket.sendInput("eA==")).toBe(false);
  });

  it("reports a bb 0.35 attach, which cannot resume, as having no replay start", () => {
    const { fake, handlers } = setup();
    fake.open();
    fake.receive({ type: "attached", session, nextSeq: 12 });
    expect(handlers.onAttached).toHaveBeenCalledWith({
      replayStartSeq: null,
      nextSeq: 12,
      session: { status: "running", exitCode: null },
    });
  });

  it("only ever sends messages bb 0.36 understands", () => {
    vi.useFakeTimers();
    try {
      const { fake, socket } = setup();
      fake.open();
      fake.receive({ type: "attached", session, replayStartSeq: 0, nextSeq: 5 });
      fake.receive({ type: "output", chunk: { seq: 5, dataBase64: "aGk=" } });
      socket.sendInput("bHM=");
      socket.sendResize(80, 24);
      vi.advanceTimersByTime(60_000);
      const types = new Set(fake.sent.map((message) => message.type));
      expect([...types].sort()).toEqual(["input", "ping", "resize"]);
    } finally {
      vi.useRealTimers();
    }
  });

  it("sends keystrokes and resizes in bb's wire format", () => {
    const { fake, socket } = setup();
    fake.open();
    socket.sendInput("bHM=");
    socket.sendResize(120, 40);
    expect(fake.sent).toEqual([
      { type: "input", dataBase64: "bHM=" },
      { type: "resize", cols: 120, rows: 40 },
    ]);
  });

  it("closes a connection that stops answering pings", () => {
    vi.useFakeTimers();
    try {
      let now = 0;
      const fake = new FakeSocket();
      new TerminalSocket({
        url: "ws://bb.test/ws/terminals/t1",
        handlers: {
          onAttached: vi.fn(),
          onOutput: vi.fn(),
          onExited: vi.fn(),
          onGone: vi.fn(),
          onClosed: vi.fn(),
        },
        createSocket: () => fake,
        now: () => now,
      });
      fake.open();
      now = 15_000;
      vi.advanceTimersByTime(15_000);
      expect(fake.sent).toContainEqual({ type: "ping" });
      expect(fake.closed).toBe(false);
      now = 60_000;
      vi.advanceTimersByTime(15_000);
      expect(fake.closed).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });
});
