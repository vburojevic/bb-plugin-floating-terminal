// The control codes and arrow sequences the on-screen key bar sends.
//
// These are the kind of thing that looks right and is silently wrong: an arrow
// that sends CSI in application cursor mode does nothing in vim, and an
// off-by-one control code sends the wrong signal to the foreground process.
import { describe, expect, it } from "vitest";
import {
  arrowSequence,
  controlCode,
  isTabCycleKey,
  tabCycleDirection,
  TOOLBAR_KEYS,
} from "./keys";

describe("controlCode", () => {
  it("maps letters to their C0 control code", () => {
    expect(controlCode("c")).toBe("\x03");
    expect(controlCode("C")).toBe("\x03");
    expect(controlCode("a")).toBe("\x01");
    expect(controlCode("d")).toBe("\x04");
    expect(controlCode("z")).toBe("\x1a");
  });

  it("covers the punctuation that carries a control code", () => {
    // Ctrl+[ is Escape, which is why the two are indistinguishable on the wire.
    expect(controlCode("[")).toBe("\x1b");
    expect(controlCode("\\")).toBe("\x1c");
    expect(controlCode("]")).toBe("\x1d");
    expect(controlCode("@")).toBe("\x00");
    expect(controlCode(" ")).toBe("\x00");
    expect(controlCode("?")).toBe("\x7f");
  });

  it("refuses anything that has no control code", () => {
    expect(controlCode("1")).toBeNull();
    expect(controlCode("é")).toBeNull();
    expect(controlCode("")).toBeNull();
    expect(controlCode("ab")).toBeNull();
  });
});

describe("arrowSequence", () => {
  it("sends CSI in normal cursor mode", () => {
    expect(arrowSequence("up", false)).toBe("\x1b[A");
    expect(arrowSequence("down", false)).toBe("\x1b[B");
    expect(arrowSequence("right", false)).toBe("\x1b[C");
    expect(arrowSequence("left", false)).toBe("\x1b[D");
  });

  it("switches to SS3 when the program asked for application cursor keys", () => {
    expect(arrowSequence("up", true)).toBe("\x1bOA");
    expect(arrowSequence("left", true)).toBe("\x1bOD");
  });
});

describe("TOOLBAR_KEYS", () => {
  it("gives every key a unique id", () => {
    const ids = TOOLBAR_KEYS.map((key) => key.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every send key something to send, and no one else one", () => {
    for (const key of TOOLBAR_KEYS) {
      if (key.kind === "send") expect(key.send).toBeTruthy();
      else expect(key.send).toBeUndefined();
    }
  });

  it("gives every arrow a direction", () => {
    for (const key of TOOLBAR_KEYS) {
      if (key.kind === "arrow") expect(key.direction).toBeTruthy();
    }
  });

  it("leads with the keys a shell is unusable without", () => {
    expect(TOOLBAR_KEYS.slice(0, 3).map((key) => key.id)).toEqual([
      "esc",
      "tab",
      "ctrl",
    ]);
  });
});

describe("isTabCycleKey", () => {
  const chord = (over: Partial<Parameters<typeof isTabCycleKey>[0]>) => ({
    key: "]",
    code: "BracketRight",
    metaKey: true,
    ctrlKey: false,
    shiftKey: true,
    altKey: false,
    ...over,
  });

  it("accepts Cmd+Shift+] and Ctrl+Shift+[", () => {
    expect(isTabCycleKey(chord({}))).toBe(true);
    expect(
      isTabCycleKey(chord({ metaKey: false, ctrlKey: true, key: "{", code: "BracketLeft" })),
    ).toBe(true);
  });

  it("needs both a primary modifier and Shift, and no Alt", () => {
    expect(isTabCycleKey(chord({ shiftKey: false }))).toBe(false);
    expect(isTabCycleKey(chord({ metaKey: false }))).toBe(false);
    expect(isTabCycleKey(chord({ altKey: true }))).toBe(false);
    expect(isTabCycleKey(chord({ key: "p", code: "KeyP" }))).toBe(false);
  });

  it("reads the direction from either the key or the physical code", () => {
    expect(tabCycleDirection({ key: "}", code: "BracketRight" })).toBe(1);
    expect(tabCycleDirection({ key: "{", code: "BracketLeft" })).toBe(-1);
    // A non-US layout where Shift+bracket is some other character.
    expect(tabCycleDirection({ key: "ü", code: "BracketLeft" })).toBe(-1);
    expect(tabCycleDirection({ key: "a", code: "KeyA" })).toBeNull();
  });
});
