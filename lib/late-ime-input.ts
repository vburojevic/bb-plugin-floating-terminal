// iOS Pinyin (and other iOS IMEs) commit a candidate without composition
// events: a keydown with keyCode 229, the text ~25 ms later as an `insertText`
// input, and only then keyup. xterm handles 229 by diffing the textarea in a
// setTimeout(0), which on iOS runs before the text lands, and then skips the
// late input because it still thinks the key is down. The candidate never
// reaches onData. This forwards exactly that late text once, and stays out of
// the way when xterm already sent it (Chrome/Android order, keyup-before-input),
// a real composition starts, or a key handler consumed the key.
//
// Install right after terminal.open(), so its listeners and timer run after
// xterm's own. That ordering holds only because xterm also listens on the
// textarea in the capture phase: at the target, capture listeners run before
// bubble ones whatever the order they were added in. Mirrors get-bb/bb#6815.
import type { IDisposable, Terminal } from "@xterm/xterm";

const IME_PROCESS_KEY_CODE = 229;

interface PendingImeKey {
  dataSent: boolean;
  xtermCheckDone: boolean;
}

export function forwardLateImeInput(
  terminal: Pick<Terminal, "input" | "onData" | "textarea">,
): IDisposable {
  const textarea = terminal.textarea;
  if (!textarea) return { dispose: () => undefined };

  let pending: PendingImeKey | null = null;
  const timers = new Set<ReturnType<typeof setTimeout>>();

  const handleKeyDown = (event: KeyboardEvent) => {
    // A key handler that turned the key into something else (the pump's armed
    // Ctrl) marks it handled; its text is not meant to reach the shell.
    if (
      event.keyCode !== IME_PROCESS_KEY_CODE ||
      event.isComposing ||
      event.defaultPrevented
    ) {
      pending = null;
      return;
    }
    const key: PendingImeKey = { dataSent: false, xtermCheckDone: false };
    pending = key;
    // Queued after xterm's own setTimeout(0), so it flips once xterm has looked.
    const timer = setTimeout(() => {
      timers.delete(timer);
      key.xtermCheckDone = true;
    }, 0);
    timers.add(timer);
  };
  const handleCompositionStart = () => {
    pending = null;
  };
  const handleInput = (event: Event) => {
    const key = pending;
    if (
      key === null ||
      !(event instanceof InputEvent) ||
      event.inputType !== "insertText" ||
      event.isComposing ||
      !event.data
    ) {
      return;
    }
    pending = null;
    if (key.xtermCheckDone && !key.dataSent) terminal.input(event.data);
  };
  // Any data between keydown and the late input means xterm (or something
  // else) already spoke for this key; don't double it.
  const dataSubscription = terminal.onData(() => {
    if (pending !== null) pending.dataSent = true;
  });

  textarea.addEventListener("keydown", handleKeyDown, true);
  textarea.addEventListener("compositionstart", handleCompositionStart, true);
  textarea.addEventListener("input", handleInput, true);
  return {
    dispose: () => {
      textarea.removeEventListener("keydown", handleKeyDown, true);
      textarea.removeEventListener("compositionstart", handleCompositionStart, true);
      textarea.removeEventListener("input", handleInput, true);
      dataSubscription.dispose();
      for (const timer of timers) clearTimeout(timer);
      timers.clear();
      pending = null;
    },
  };
}
