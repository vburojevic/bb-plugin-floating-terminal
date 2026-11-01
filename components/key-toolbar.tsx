// The keys a software keyboard does not have.
//
// Sits at the bottom of the sheet, which is where the iOS keyboard pushes it —
// so it lands directly above the keys, the way every native terminal app on the
// platform puts it. Rendered only in sheet mode; a desktop keyboard has all of
// these already.
//
// Ctrl is a latch rather than a chord: there is no way to hold two keys at once
// on a touch screen, so tapping it arms the modifier and the next character
// typed on the software keyboard becomes its control code.
import { useRef } from "react";
import { TOOLBAR_KEYS, type ToolbarKey } from "@/lib/keys";
import { cn } from "@/lib/utils";

export interface KeyToolbarProps {
  ctrlArmed: boolean;
  onKey: (key: ToolbarKey) => void;
}

export function KeyToolbar({ ctrlArmed, onKey }: KeyToolbarProps) {
  // The pointer that went down on a release key, so the key fires only for the
  // press that started on it. A touch that scrolls the bar ends in
  // pointercancel instead of pointerup, which clears this without firing.
  const pressed = useRef<{ id: string; pointerId: number } | null>(null);
  return (
    <div
      className="bb-ft-keybar flex shrink-0 items-center gap-1 border-t border-border bg-muted/40"
      role="toolbar"
      aria-label="Terminal keys"
      data-no-drag=""
    >
      {TOOLBAR_KEYS.map((key) => {
        const armed = key.id === "ctrl" && ctrlArmed;
        return (
          <button
            key={key.id}
            type="button"
            title={key.title}
            aria-label={key.title}
            aria-pressed={key.kind === "modifier" ? armed : undefined}
            // Pointer-down, not click: a tap that lands on a button steals focus
            // from the terminal, and on iOS losing focus dismisses the keyboard.
            // Preventing the default keeps focus where it is, so the bar can be
            // used mid-command without the keyboard flapping open and shut.
            //
            // A key that needs user activation waits for the lift instead: a
            // touch pointerdown does not count as activation, pointerup does,
            // so paste fired on the way down was refused on every iPhone.
            onPointerDown={(event) => {
              event.preventDefault();
              if (key.firesOnRelease) {
                pressed.current = { id: key.id, pointerId: event.pointerId };
                return;
              }
              onKey(key);
            }}
            onPointerUp={(event) => {
              const press = pressed.current;
              if (press?.id !== key.id || press.pointerId !== event.pointerId) return;
              pressed.current = null;
              onKey(key);
            }}
            // A touch is held to the button it went down on until it lifts, but
            // a mouse is not: one released elsewhere would leave the press set
            // for a later drag that ends here.
            onPointerCancel={() => {
              pressed.current = null;
            }}
            onPointerLeave={() => {
              pressed.current = null;
            }}
            className={cn(
              "bb-ft-key",
              key.emphasis ? "bb-ft-key-strong" : null,
              armed ? "bb-ft-key-armed" : null,
            )}
          >
            {key.label}
          </button>
        );
      })}
    </div>
  );
}
