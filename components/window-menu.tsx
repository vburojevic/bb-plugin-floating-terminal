// The ⋯ menu in the title bar: everything a tab can do that does not earn a
// permanent button.
//
// Restart lives here rather than beside the close button, where it used to be:
// it kills a running shell, and a destructive action one pixel-row from "hide"
// is how a long-running server gets lost to a misclick.
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon, type IconName } from "@/components/ui/icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { SnapTarget } from "@/lib/frame";
import { MAX_FONT_SIZE, MIN_FONT_SIZE } from "@/lib/prefs";
import { cn } from "@/lib/utils";

export const IS_APPLE =
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);

/** The platform's modifiers, spelled the way its menus spell them. */
export const MOD = IS_APPLE ? "⌘" : "Ctrl+";
export const SHIFT = IS_APPLE ? "⇧" : "Shift+";

export interface WindowMenuProps {
  hasTab: boolean;
  onRename: () => void;
  onRestart: () => void;
  onClear: () => void;
  onFind: () => void;
  onCopyAll: () => void;
  /** Null when no composer is on screen to send to. */
  onSendToAgent: (() => void) | null;
  fontSize: number;
  /** Customised away from the plugin setting, so "reset" means something. */
  fontCustomised: boolean;
  onFontSize: (next: number | null) => void;
  /** Window mode only; a sheet has one layout. */
  layout: {
    maximized: boolean;
    onToggleMaximize: () => void;
    onSnap: (target: SnapTarget) => void;
  } | null;
  onShortcuts: () => void;
  /** The menu closed; the window decides where focus goes next. */
  onClosed?: () => void;
}

function Item({
  icon,
  children,
  shortcut,
  disabled,
  onSelect,
}: {
  icon: IconName;
  children: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  onSelect: () => void;
}) {
  return (
    <DropdownMenuItem disabled={disabled} onSelect={onSelect}>
      <Icon name={icon} className="size-4 text-muted-foreground" aria-hidden="true" />
      <span className="flex-1">{children}</span>
      {shortcut === undefined ? null : <DropdownMenuShortcut className="bb-ft-shortcut-hint">{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem>
  );
}

function StepButton({
  label,
  icon,
  disabled,
  onClick,
  active,
}: {
  label: string;
  icon: IconName;
  disabled?: boolean;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      aria-pressed={active}
      onClick={onClick}
      className={cn("bb-ft-step", active ? "bb-ft-step-on" : null)}
    >
      <Icon name={icon} className="size-3.5" aria-hidden="true" />
    </button>
  );
}

export function WindowMenu({
  hasTab,
  onRename,
  onRestart,
  onClear,
  onFind,
  onCopyAll,
  onSendToAgent,
  fontSize,
  fontCustomised,
  onFontSize,
  layout,
  onShortcuts,
  onClosed,
}: WindowMenuProps) {
  const [open, setOpenState] = useState(false);
  const setOpen = (next: boolean) => {
    setOpenState(next);
    if (!next) onClosed?.();
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <Tooltip>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              data-no-drag=""
              data-bb-ft-action=""
              className="bb-ft-bar-button"
              aria-label="More actions"
            >
              <Icon name="MoreHorizontal" aria-hidden="true" />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <TooltipContent className="bb-ft-tooltip">More actions</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end" className="w-60" mobileTitle="Terminal actions">
        <Item icon="Edit" disabled={!hasTab} onSelect={onRename} shortcut="F2">
          Rename tab
        </Item>
        <Item icon="ArrowReloadHorizontal" disabled={!hasTab} onSelect={onRestart}>
          Restart shell
        </Item>
        <DropdownMenuSeparator />
        <Item icon="Search" disabled={!hasTab} onSelect={onFind} shortcut={`${MOD}F`}>
          Find in scrollback
        </Item>
        <Item
          icon="Trash2"
          disabled={!hasTab}
          onSelect={onClear}
          shortcut={IS_APPLE ? "⌘K" : undefined}
        >
          Clear scrollback
        </Item>
        <Item icon="Copy" disabled={!hasTab} onSelect={onCopyAll}>
          Copy all output
        </Item>
        {onSendToAgent === null ? null : (
          <Item icon="Sent" disabled={!hasTab} onSelect={onSendToAgent}>
            Send output to the agent
          </Item>
        )}
        <DropdownMenuSeparator />
        <div className="bb-ft-menu-row" role="group" aria-label="Text size">
          <span className="flex-1 text-xs text-muted-foreground">Text size</span>
          <StepButton
            label="Smaller text"
            icon="Minus"
            disabled={fontSize <= MIN_FONT_SIZE}
            onClick={() => onFontSize(fontSize - 1)}
          />
          <button
            type="button"
            className="bb-ft-step-value"
            title={fontCustomised ? "Back to the default size" : "Default size"}
            onClick={() => onFontSize(null)}
          >
            {fontSize}
          </button>
          <StepButton
            label="Larger text"
            icon="Plus"
            disabled={fontSize >= MAX_FONT_SIZE}
            onClick={() => onFontSize(fontSize + 1)}
          />
        </div>
        {layout === null ? null : (
          <div className="bb-ft-menu-row" role="group" aria-label="Layout">
            <span className="flex-1 text-xs text-muted-foreground">Layout</span>
            <StepButton
              label="Left half"
              icon="PanelLeft"
              onClick={() => {
                setOpen(false);
                layout.onSnap("left");
              }}
            />
            <StepButton
              label="Bottom strip"
              icon="PanelBottom"
              onClick={() => {
                setOpen(false);
                layout.onSnap("bottom");
              }}
            />
            <StepButton
              label="Right half"
              icon="PanelRight"
              onClick={() => {
                setOpen(false);
                layout.onSnap("right");
              }}
            />
            <StepButton
              label={layout.maximized ? "Restore" : "Maximize"}
              icon={layout.maximized ? "Minimize2" : "Maximize2"}
              active={layout.maximized}
              onClick={() => {
                setOpen(false);
                layout.onToggleMaximize();
              }}
            />
          </div>
        )}
        <DropdownMenuSeparator />
        <Item icon="Keyboard" onSelect={onShortcuts}>
          Keyboard shortcuts
        </Item>
        <DropdownMenuLabel className="bb-ft-menu-foot">
          Shells keep running while the window is hidden.
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
