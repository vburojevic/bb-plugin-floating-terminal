// Things that float over the terminal: the right-click menu, the keyboard
// shortcut sheet, and the pills along the bottom edge.
import { useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon, type IconName } from "@/components/ui/icon";
import { IS_APPLE, MOD, SHIFT } from "@/components/window-menu";

// ------------------------------------------------------------ context menu

export interface TerminalMenuProps {
  /** Where the right-click landed, relative to the terminal body. */
  at: { x: number; y: number } | null;
  hasSelection: boolean;
  canSendToAgent: boolean;
  onOpenChange: (open: boolean) => void;
  onCopy: () => void;
  onPaste: () => void;
  onSelectAll: () => void;
  onSendToAgent: () => void;
  onFind: () => void;
  onClear: () => void;
}

function MenuItem({
  icon,
  label,
  shortcut,
  disabled,
  onSelect,
}: {
  icon: IconName;
  label: string;
  shortcut?: string;
  disabled?: boolean;
  onSelect: () => void;
}) {
  return (
    <DropdownMenuItem disabled={disabled} onSelect={onSelect}>
      <Icon name={icon} className="size-4 text-muted-foreground" aria-hidden="true" />
      <span className="flex-1">{label}</span>
      {shortcut === undefined ? null : <DropdownMenuShortcut className="bb-ft-shortcut-hint">{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem>
  );
}

/**
 * A right-click menu. bb's desktop app shows no native context menu at all, so
 * without this a right-click in the terminal did nothing; in a browser the
 * native one offered "Inspect" and not much else useful for a shell.
 */
export function TerminalMenu({
  at,
  hasSelection,
  canSendToAgent,
  onOpenChange,
  onCopy,
  onPaste,
  onSelectAll,
  onSendToAgent,
  onFind,
  onClear,
}: TerminalMenuProps) {
  return (
    <DropdownMenu open={at !== null} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {/* A zero-size anchor at the pointer; Radix positions against it. */}
        <span
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute size-0"
          style={at === null ? { left: 0, top: 0 } : { left: at.x, top: at.y }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={2} className="w-56">
        <MenuItem
          icon="Copy"
          label="Copy"
          shortcut={`${MOD}C`}
          disabled={!hasSelection}
          onSelect={onCopy}
        />
        <MenuItem icon="FileText" label="Paste" shortcut={`${MOD}V`} onSelect={onPaste} />
        <MenuItem icon="ListView" label="Select all" onSelect={onSelectAll} />
        {canSendToAgent ? (
          <>
            <DropdownMenuSeparator />
            <MenuItem
              icon="Sent"
              label={hasSelection ? "Send selection to the agent" : "Send output to the agent"}
              onSelect={onSendToAgent}
            />
          </>
        ) : null}
        <DropdownMenuSeparator />
        <MenuItem icon="Search" label="Find…" shortcut={`${MOD}F`} onSelect={onFind} />
        <MenuItem
          icon="Trash2"
          label="Clear scrollback"
          shortcut={IS_APPLE ? "⌘K" : undefined}
          onSelect={onClear}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// -------------------------------------------------------------- shortcuts

const SHORTCUTS: ReadonlyArray<{ keys: string; does: string }> = [
  { keys: "Ctrl+`", does: "Show or hide the terminal" },
  { keys: "Ctrl+Shift+`", does: "New shell where you are — this thread's worktree" },
  { keys: `${MOD}${SHIFT}[ / ${MOD}${SHIFT}]`, does: "Previous / next tab" },
  { keys: `${MOD}F`, does: "Find in scrollback" },
  ...(IS_APPLE ? [{ keys: "⌘K", does: "Clear scrollback" }] : []),
  { keys: `${MOD}C`, does: "Copy the selection (otherwise it is ^C)" },
  { keys: "F2 · double-click", does: "Rename a tab" },
  { keys: "Middle-click", does: "Close a tab" },
  { keys: "Drag a tab", does: "Reorder" },
  { keys: "Double-click title bar", does: "Maximize or restore" },
  { keys: "Right-click", does: "Copy, paste, send to the agent" },
];

export function ShortcutsPanel({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    // After the menu that opened this has finished handing focus back.
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    // Escape closes it wherever focus ended up — including back in the
    // terminal, where it would otherwise just reach the shell.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      onCloseRef.current();
    };
    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown, { capture: true });
    };
  }, []);

  return (
    <div
      className="bb-ft-scrim"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="bb-ft-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Keyboard shortcuts"
        data-no-drag=""
      >
        <div className="flex items-center gap-2 px-4 pb-2 pt-3.5">
          <Icon name="Keyboard" className="size-4 text-muted-foreground" aria-hidden="true" />
          <h2 className="flex-1 text-sm font-medium text-foreground">Keyboard shortcuts</h2>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            className="bb-ft-step"
            onClick={onClose}
          >
            <Icon name="X" className="size-3.5" aria-hidden="true" />
          </button>
        </div>
        <dl className="bb-ft-shortcuts">
          {SHORTCUTS.map((shortcut) => (
            <div key={shortcut.does} className="contents">
              <dt>
                <kbd className="bb-ft-kbd">{shortcut.keys}</kbd>
              </dt>
              <dd>{shortcut.does}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------ pills

export function PillBar({ children }: { children: React.ReactNode }) {
  return <div className="bb-ft-pills">{children}</div>;
}

export function Pill({
  icon,
  children,
  onClick,
  tone,
  label,
}: {
  icon: IconName;
  children: React.ReactNode;
  onClick: () => void;
  tone?: "accent";
  label?: string;
}) {
  return (
    <button
      type="button"
      className="bb-ft-pill"
      data-tone={tone}
      aria-label={label}
      // Keep the terminal's selection and focus: a pill that took focus would
      // clear the very selection it is about to act on.
      onPointerDown={(event) => event.preventDefault()}
      onClick={onClick}
    >
      <Icon name={icon} className="size-3.5" aria-hidden="true" />
      {children}
    </button>
  );
}
