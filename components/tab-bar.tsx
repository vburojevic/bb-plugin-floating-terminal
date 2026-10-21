// The window's navigation: a browser-style tab strip in the title bar.
//
// Each tab is one shell session. A tab is a div with tab semantics rather than
// a <button> because it contains the close control, and nesting buttons is an
// accessibility violation; Enter/Space activation is wired by hand instead.
// Everything interactive carries data-no-drag; the bar itself is the window's
// drag handle.
//
// Tabs behave the way every browser's do: middle-click closes, double-click
// renames, dragging with a mouse reorders, and the wheel scrolls a strip that
// has run out of room.
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon, type IconName } from "@/components/ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShellPicker } from "@/components/shell-picker";
import { scopeIcon, type ScopeOption } from "@/lib/scopes";
import { scopeKind, tabName, type TabState } from "@/lib/tabs";
import { cn } from "@/lib/utils";

export interface TabBarProps {
  tabs: TabState[];
  activeId: string | null;
  scopes: ScopeOption[];
  recentScopeKeys: string[];
  here: ScopeOption | null;
  showHosts: boolean;
  /** Window mode only; a sheet already fills the screen. */
  maximize: { on: boolean; toggle: () => void } | null;
  /** The + menu's open state, lifted so a palette command can open it. */
  newMenuOpen: boolean;
  onNewMenuOpenChange: (open: boolean) => void;
  renamingId: string | null;
  onSelect: (terminalId: string) => void;
  onClose: (terminalId: string) => void;
  onNewTab: (scopeKey: string) => void;
  onStartRename: (terminalId: string) => void;
  /** Null means "go back to the automatic name". */
  onRename: (terminalId: string, name: string | null) => void;
  onCancelRename: () => void;
  onMove: (terminalId: string, toIndex: number) => void;
  onHide: () => void;
  /** The ⋯ actions menu, rendered between maximize and hide. */
  actions: ReactNode;
}

/** A key combination inside a tooltip, set apart from the words around it. */
export function Shortcut({ children }: { children: ReactNode }) {
  return <kbd className="bb-ft-kbd ml-1.5">{children}</kbd>;
}

/**
 * The one mark a tab can carry at its trailing edge. Status outranks activity:
 * a shell that died matters more than one that printed.
 */
function indicator(tab: TabState): { className: string; label: string } | null {
  switch (tab.status) {
    case "connecting":
      return { className: "bb-ft-dot bb-ft-dot-pulse", label: "Connecting" };
    case "exited":
      return { className: "bb-ft-dot bb-ft-dot-hollow", label: "Exited" };
    case "error":
      return { className: "bb-ft-dot bb-ft-dot-error", label: "Error" };
    default:
      break;
  }
  if (tab.activity === "bell") return { className: "bb-ft-dot bb-ft-dot-bell", label: "Rang the bell" };
  if (tab.activity === "output") return { className: "bb-ft-dot", label: "New output" };
  return null;
}

export function NewTabMenu({
  scopes,
  recentScopeKeys,
  here,
  showHosts,
  open,
  onOpenChange,
  onNewTab,
  children,
}: {
  scopes: ScopeOption[];
  recentScopeKeys: string[];
  here: ScopeOption | null;
  showHosts: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNewTab: (scopeKey: string) => void;
  children: ReactNode;
}) {
  // Controlled, because the rows are cmdk items rather than DropdownMenuItems:
  // Radix never sees a select event, so picking a directory would open the tab
  // and leave the menu sitting on top of the shell it just started.
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 p-0" mobileTitle="New shell">
        <ShellPicker
          scopes={scopes}
          recentScopeKeys={recentScopeKeys}
          here={here}
          showHosts={showHosts}
          onPick={(scopeKey) => {
            onOpenChange(false);
            onNewTab(scopeKey);
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function RenameField({
  initial,
  onCommit,
  onCancel,
}: {
  initial: string;
  onCommit: (value: string) => void;
  onCancel: () => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // Enter and Escape both end the edit, and the blur that follows must not
  // commit a second time.
  const settled = useRef(false);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  return (
    <input
      ref={inputRef}
      defaultValue={initial}
      aria-label="Tab name"
      maxLength={60}
      spellCheck={false}
      autoCapitalize="off"
      autoCorrect="off"
      className="bb-ft-rename"
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
      onDoubleClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        // The strip's own keys (tab cycling, Enter to select) stay out of it.
        event.stopPropagation();
        if (event.key === "Enter") {
          event.preventDefault();
          settled.current = true;
          onCommit(event.currentTarget.value);
        } else if (event.key === "Escape") {
          event.preventDefault();
          settled.current = true;
          onCancel();
        }
      }}
      onBlur={(event) => {
        if (!settled.current) onCommit(event.currentTarget.value);
      }}
    />
  );
}

function TabItem({
  tab,
  active,
  showHost,
  renaming,
  dragging,
  onSelect,
  onClose,
  onStartRename,
  onRename,
  onCancelRename,
  onPointerDown,
}: {
  tab: TabState;
  active: boolean;
  showHost: boolean;
  renaming: boolean;
  dragging: boolean;
  onSelect: () => void;
  onClose: () => void;
  onStartRename: () => void;
  onRename: (name: string | null) => void;
  onCancelRename: () => void;
  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
}) {
  const mark = indicator(tab);
  const name = tabName(tab, showHost);
  const automatic = tab.shellTitle ?? tab.label;
  const kind = scopeKind(tab.scopeKey);
  const icon: IconName = scopeIcon(kind);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    } else if (event.key === "F2") {
      event.preventDefault();
      onStartRename();
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          role="tab"
          tabIndex={0}
          aria-selected={active}
          // Explicit, or the name is computed from contents and the nested
          // close button folds in: "Home Close Home".
          aria-label={mark === null ? name : `${name}, ${mark.label.toLowerCase()}`}
          data-no-drag=""
          data-tab-id={tab.terminalId}
          data-active={active ? "" : undefined}
          data-dragging={dragging ? "" : undefined}
          onClick={onSelect}
          onPointerDown={onPointerDown}
          // The convention every browser and editor tab strip shares — and
          // without preventDefault a middle press starts autoscroll first.
          onMouseDown={(event) => {
            if (event.button === 1) event.preventDefault();
          }}
          onAuxClick={(event) => {
            if (event.button === 1) onClose();
          }}
          onDoubleClick={(event) => {
            event.stopPropagation();
            onStartRename();
          }}
          onKeyDown={handleKeyDown}
          className="bb-ft-tab group"
        >
          <Icon name={icon} className="bb-ft-tab-icon" aria-hidden="true" />
          {renaming ? (
            <RenameField
              initial={name}
              onCommit={(value) => {
                const trimmed = value.trim();
                // Typing the automatic name back in, or clearing the field,
                // hands naming back to the shell.
                onRename(trimmed === "" || trimmed === automatic ? null : trimmed);
              }}
              onCancel={onCancelRename}
            />
          ) : (
            <span className="min-w-0 flex-1 truncate">{name}</span>
          )}
          <span className="bb-ft-tab-end">
            {mark === null ? null : (
              <span className={mark.className} aria-hidden="true" />
            )}
            <button
              type="button"
              aria-label={`Close ${name}`}
              data-has-mark={mark === null ? undefined : ""}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              className="bb-ft-tab-close"
            >
              <Icon name="X" className="size-3" aria-hidden="true" />
            </button>
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bb-ft-tooltip">
        <span className="block font-medium">{name}</span>
        <span className="block font-mono opacity-80">
          {tab.hostName === "" ? tab.cwd : `${tab.hostName}:${tab.cwd}`}
        </span>
        {tab.statusDetail === null ? null : (
          <span className="block opacity-80">{tab.statusDetail}</span>
        )}
        <span className="mt-1 block opacity-60">
          Double-click to rename · middle-click to close
        </span>
      </TooltipContent>
    </Tooltip>
  );
}

/** A title-bar icon button: a full-height target with a compact visual. */
export function BarButton({
  label,
  icon,
  onClick,
  tooltip,
  className,
  ...props
}: {
  label: string;
  icon: IconName;
  onClick?: () => void;
  tooltip: ReactNode;
  className?: string;
} & Omit<React.ComponentProps<typeof Button>, "onClick" | "children">) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          data-no-drag=""
          data-bb-ft-action=""
          className={cn("bb-ft-bar-button", className)}
          onClick={onClick}
          aria-label={label}
          {...props}
        >
          <Icon name={icon} aria-hidden="true" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bb-ft-tooltip">{tooltip}</TooltipContent>
    </Tooltip>
  );
}

interface TabDrag {
  id: string;
  pointerId: number;
  startX: number;
  moved: boolean;
}

export function TabBar({
  tabs,
  activeId,
  scopes,
  recentScopeKeys,
  here,
  showHosts,
  maximize,
  newMenuOpen,
  onNewMenuOpenChange,
  renamingId,
  onSelect,
  onClose,
  onNewTab,
  onStartRename,
  onRename,
  onCancelRename,
  onMove,
  onHide,
  actions,
}: TabBarProps) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const drag = useRef<TabDrag | null>(null);
  const [dragState, setDragState] = useState<{
    id: string;
    insertAt: number;
    x: number;
  } | null>(null);

  // A tab opened or selected off the end of a crowded strip comes into view.
  useEffect(() => {
    if (activeId === null) return;
    const node = listRef.current?.querySelector<HTMLElement>(
      `[data-tab-id="${CSS.escape(activeId)}"]`,
    );
    node?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeId, tabs.length]);

  /** Where a tab dropped at `clientX` lands: an index into the strip, and the x of the gap. */
  function insertionAt(clientX: number): { insertAt: number; x: number } {
    const list = listRef.current;
    if (list === null) return { insertAt: 0, x: 0 };
    const listRect = list.getBoundingClientRect();
    const nodes = Array.from(list.querySelectorAll<HTMLElement>("[role=tab]"));
    for (let index = 0; index < nodes.length; index += 1) {
      const rect = nodes[index]!.getBoundingClientRect();
      if (clientX < rect.left + rect.width / 2) {
        return { insertAt: index, x: rect.left - listRect.left + list.scrollLeft - 2 };
      }
    }
    const last = nodes[nodes.length - 1]?.getBoundingClientRect();
    return {
      insertAt: nodes.length,
      x: last === undefined ? 0 : last.right - listRect.left + list.scrollLeft + 1,
    };
  }

  function onTabPointerDown(event: ReactPointerEvent<HTMLDivElement>, id: string) {
    // Mouse only: on a touch screen the same gesture scrolls the strip.
    if (event.pointerType !== "mouse" || event.button !== 0 || renamingId !== null) return;
    if (tabs.length < 2) return;
    drag.current = { id, pointerId: event.pointerId, startX: event.clientX, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onTabPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (current === null || current.pointerId !== event.pointerId) return;
    if (!current.moved && Math.abs(event.clientX - current.startX) < 6) return;
    current.moved = true;
    setDragState({ id: current.id, ...insertionAt(event.clientX) });
  }

  function onTabPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (current === null || current.pointerId !== event.pointerId) return;
    drag.current = null;
    if (current.moved) {
      const from = tabs.findIndex((tab) => tab.terminalId === current.id);
      const { insertAt } = insertionAt(event.clientX);
      // The gap is counted before the dragged tab leaves its own slot.
      const toIndex = insertAt > from ? insertAt - 1 : insertAt;
      if (from !== -1 && toIndex !== from) onMove(current.id, toIndex);
    }
    setDragState(null);
  }

  return (
    <div
      data-bb-ft-tabbar=""
      className="bb-ft-tabbar flex shrink-0 select-none items-center"
    >
      {/* Hidden in sheet mode from styles.css: nothing there is draggable, and
          a grip that does nothing is worse than no grip. */}
      <span data-bb-ft-grip="" className="flex shrink-0 items-center" aria-hidden="true">
        <Icon name="DragDropVertical" className="size-3.5 shrink-0" />
      </span>

      {tabs.length === 0 ? (
        <span className="bb-ft-title" aria-hidden="true">
          Terminal
        </span>
      ) : (
        <div
          ref={listRef}
          role="tablist"
          aria-label="Open shells"
          className="bb-ft-tablist relative flex min-w-0 items-center"
          onPointerMove={onTabPointerMove}
          onPointerUp={onTabPointerUp}
          onPointerCancel={() => {
            drag.current = null;
            setDragState(null);
          }}
          onWheel={(event) => {
            // A vertical wheel over a horizontal strip means "show me more tabs".
            const list = listRef.current;
            if (list === null || event.deltaX !== 0) return;
            list.scrollLeft += event.deltaY;
          }}
        >
          {tabs.map((tab) => (
            <TabItem
              key={tab.terminalId}
              tab={tab}
              active={tab.terminalId === activeId}
              showHost={showHosts}
              renaming={tab.terminalId === renamingId}
              dragging={dragState?.id === tab.terminalId}
              onSelect={() => onSelect(tab.terminalId)}
              onClose={() => onClose(tab.terminalId)}
              onStartRename={() => onStartRename(tab.terminalId)}
              onRename={(name) => onRename(tab.terminalId, name)}
              onCancelRename={onCancelRename}
              onPointerDown={(event) => onTabPointerDown(event, tab.terminalId)}
            />
          ))}
          {dragState === null ? null : (
            <span
              className="bb-ft-drop-indicator"
              style={{ transform: `translateX(${dragState.x}px)` }}
              aria-hidden="true"
            />
          )}
        </div>
      )}

      <Tooltip>
        <NewTabMenu
          scopes={scopes}
          recentScopeKeys={recentScopeKeys}
          here={here}
          showHosts={showHosts}
          open={newMenuOpen}
          onOpenChange={onNewMenuOpenChange}
          onNewTab={onNewTab}
        >
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              data-no-drag=""
              data-bb-ft-action=""
              className="bb-ft-bar-button"
              aria-label="New shell"
            >
              <Icon name="Plus" aria-hidden="true" />
            </Button>
          </TooltipTrigger>
        </NewTabMenu>
        <TooltipContent className="bb-ft-tooltip">
          New shell
          <span className="mt-0.5 block opacity-70">
            Here <Shortcut>Ctrl+Shift+`</Shortcut>
          </span>
        </TooltipContent>
      </Tooltip>

      {/* Everything left of here scrolls; this is the guaranteed drag surface. */}
      <span data-bb-ft-drag="" className="h-full min-w-6 flex-1" />

      {maximize === null ? null : (
        <BarButton
          label={maximize.on ? "Restore window size" : "Maximize window"}
          icon={maximize.on ? "Minimize2" : "Maximize2"}
          onClick={maximize.toggle}
          tooltip={
            <>
              {maximize.on ? "Restore" : "Maximize"}
              <span className="mt-0.5 block opacity-70">or double-click the title bar</span>
            </>
          }
        />
      )}

      {actions}

      <BarButton
        label="Hide terminal"
        icon="X"
        onClick={onHide}
        tooltip={
          <>
            Hide — shells keep running
            <Shortcut>Ctrl+`</Shortcut>
          </>
        }
      />
    </div>
  );
}
