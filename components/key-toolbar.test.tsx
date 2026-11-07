// @vitest-environment jsdom
//
// On iOS a tap moves focus with the click it synthesizes after touchend, and
// preventDefault on pointerdown does not stop that click. So every key on the
// bar blurred the terminal and took the software keyboard down with it. The bar
// cancels touchend to drop the click. A touch that scrolled the bar ends
// uncancelable, and that one has to be left alone.
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { ToolbarKey } from "../lib/keys";
import { KeyToolbar } from "./key-toolbar";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let host: HTMLDivElement;
let root: Root;
let pressed: string[];

beforeEach(() => {
  host = document.createElement("div");
  document.body.append(host);
  root = createRoot(host);
  pressed = [];
  act(() => {
    root.render(
      <KeyToolbar ctrlArmed={false} onKey={(key: ToolbarKey) => pressed.push(key.id)} />,
    );
  });
});

afterEach(() => {
  act(() => root.unmount());
  host.remove();
});

function key(id: string): HTMLButtonElement {
  const button = host.querySelector<HTMLButtonElement>(`button[aria-label="${id}"]`);
  if (button === null) throw new Error(`no key labelled ${id}`);
  return button;
}

function touchEnd(target: Element, cancelable: boolean): Event {
  const event = new Event("touchend", { bubbles: true, cancelable });
  act(() => {
    target.dispatchEvent(event);
  });
  return event;
}

describe("KeyToolbar on a touch screen", () => {
  it("cancels the touchend of a tap, so iOS does not move focus off the terminal", () => {
    expect(touchEnd(key("Control"), true).defaultPrevented).toBe(true);
    expect(touchEnd(key("Interrupt (Ctrl+C)"), true).defaultPrevented).toBe(true);
  });

  it("leaves an uncancelable touchend alone, the end of a scroll along the bar", () => {
    expect(touchEnd(key("Control"), false).defaultPrevented).toBe(false);
  });

  it("still fires keys on the pointer, not the click it gave up", () => {
    act(() => {
      key("Control").dispatchEvent(
        new Event("pointerdown", { bubbles: true, cancelable: true }),
      );
    });
    expect(pressed).toEqual(["ctrl"]);
  });
});
