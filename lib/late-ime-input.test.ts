// @vitest-environment jsdom
//
// iOS Pinyin commits a candidate without composition events: keydown 229, then
// the text arrives by `input` ~25 ms later, then keyup. xterm's 229 check runs
// in a setTimeout(0) before the text lands, and its input handler skips the
// late event because the key is still down — so the shell never sees it.
// These drive a real xterm with that exact event order.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Terminal } from "@xterm/xterm";
import { forwardLateImeInput } from "./late-ime-input";

// xterm probes a canvas at import time; jsdom has none and logs a loud
// "Not implemented" unless it is stubbed before the import.
const canvasContext = vi.hoisted(() => {
  const context = {
    measureText: (text: string) => ({ width: text.length * 9 }),
  } as unknown as CanvasRenderingContext2D;
  HTMLCanvasElement.prototype.getContext = (() =>
    context) as unknown as HTMLCanvasElement["getContext"];
  return context;
});

let terminal: Terminal;
let host: HTMLDivElement;
let sent: string[];

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    canvasContext,
  );
  // jsdom has no matchMedia; xterm only uses it to watch devicePixelRatio.
  vi.stubGlobal("matchMedia", () => ({
    matches: false,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  }));
  host = document.createElement("div");
  document.body.append(host);
  terminal = new Terminal({ cols: 40, rows: 5 });
  terminal.open(host);
  sent = [];
  terminal.onData((data) => sent.push(data));
});

afterEach(() => {
  terminal.dispose();
  host.remove();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function textarea(): HTMLTextAreaElement {
  if (!terminal.textarea) throw new Error("Expected terminal textarea");
  return terminal.textarea;
}

function nextTask(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

function imeKeyDown(text: string): void {
  textarea().dispatchEvent(
    new KeyboardEvent("keydown", {
      key: text,
      keyCode: 229,
      bubbles: true,
      cancelable: true,
    }),
  );
}

function imeKeyUp(text: string): void {
  textarea().dispatchEvent(
    new KeyboardEvent("keyup", { key: text, keyCode: 0, bubbles: true }),
  );
}

function insertText(text: string): void {
  const element = textarea();
  element.value += text;
  element.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      composed: true,
      data: text,
      inputType: "insertText",
    }),
  );
}

async function iosCandidate(text: string): Promise<void> {
  imeKeyDown(text);
  await nextTask();
  insertText(text);
  imeKeyUp(text);
}

describe("xterm without the forwarder", () => {
  it("drops a candidate iOS inserts after xterm's keydown check", async () => {
    await iosCandidate("你好");
    await nextTask();
    expect(sent).toEqual([]);
  });
});

describe("forwardLateImeInput", () => {
  it("sends a candidate that iOS inserts after xterm's keydown check", async () => {
    const forwarding = forwardLateImeInput(terminal);
    try {
      await iosCandidate("你好");
      await nextTask();
      expect(sent).toEqual(["你好"]);
    } finally {
      forwarding.dispose();
    }
  });

  it("leaves text inserted before xterm's keydown check to xterm", async () => {
    const forwarding = forwardLateImeInput(terminal);
    try {
      imeKeyDown("你好");
      insertText("你好");
      imeKeyUp("你好");
      await nextTask();
      expect(sent).toEqual(["你好"]);
    } finally {
      forwarding.dispose();
    }
  });

  it("leaves late text to xterm once the key has been released", async () => {
    const forwarding = forwardLateImeInput(terminal);
    try {
      imeKeyDown("你好");
      await nextTask();
      imeKeyUp("你好");
      insertText("你好");
      await nextTask();
      expect(sent).toEqual(["你好"]);
    } finally {
      forwarding.dispose();
    }
  });

  it("sends consecutive iOS candidates once each", async () => {
    const forwarding = forwardLateImeInput(terminal);
    try {
      for (const text of ["你好", "世界"]) await iosCandidate(text);
      await nextTask();
      expect(sent).toEqual(["你好", "世界"]);
    } finally {
      forwarding.dispose();
    }
  });

  it("leaves a key alone once a key handler has consumed it", async () => {
    // The pump's armed Ctrl turns the next key into a control code on keydown,
    // straight to the pty and not through onData, and marks the key handled.
    terminal.attachCustomKeyEventHandler((event) => {
      if (event.type !== "keydown") return true;
      event.preventDefault();
      sent.push("ctrl:" + event.key);
      return false;
    });
    const forwarding = forwardLateImeInput(terminal);
    try {
      await iosCandidate("c");
      await nextTask();
      expect(sent).toEqual(["ctrl:c"]);
    } finally {
      forwarding.dispose();
    }
  });

  it("stops forwarding once disposed", async () => {
    forwardLateImeInput(terminal).dispose();
    await iosCandidate("你好");
    await nextTask();
    expect(sent).toEqual([]);
  });
});
