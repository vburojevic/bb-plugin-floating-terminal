// Choosing where a shell runs.
//
// Both places the user picks a directory share this list, so the vocabulary is
// the same whether the window is empty or they are adding a tab: the same
// order, the same grouping, the same rows. The ranking itself lives in
// lib/scopes.ts.
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icon } from "@/components/ui/icon";
import { buildSections, shortenPath, type ScopeOption } from "@/lib/scopes";
import { cn } from "@/lib/utils";

export interface ShellPickerProps {
  scopes: ScopeOption[];
  recentScopeKeys: string[];
  /** The thread's worktree or the project in view; offered first. */
  here?: ScopeOption | null;
  /** True when more than one machine is connected, so paths need qualifying. */
  showHosts: boolean;
  onPick: (scopeKey: string) => void;
  /**
   * Take the height offered instead of the menu-sized default. The empty window
   * has a whole pane to fill; the `+` dropdown must stay a dropdown.
   */
  fill?: boolean;
  className?: string;
}

/** Search earns its place only once scanning the list stops being instant. */
const SEARCHABLE_FROM = 7;

export function ShellPicker({
  scopes,
  recentScopeKeys,
  here = null,
  showHosts,
  onPick,
  fill = false,
  className,
}: ShellPickerProps) {
  const sections = buildSections(scopes, recentScopeKeys, here);
  const searchable = scopes.length >= SEARCHABLE_FROM;

  return (
    <Command
      // cmdk filters on the value; include the path and machine so searching
      // "scw" or "Git/Type" finds the right row, not just its display name.
      className={cn("flex min-h-0 flex-col bg-transparent", className)}
    >
      {searchable ? <CommandInput placeholder="Find a directory" /> : null}
      {/* Fill mode is bounded by the flex parent, so it has to shed the
          vendored 300px menu cap; the dropdown keeps it. The cap is lifted from
          styles.css rather than with `max-h-none`, because this plugin's
          Tailwind utility layer loses to bb's own app CSS in the host page —
          `min-h-0` lands, `max-h-*` does not. */}
      <CommandList data-bb-ft-fill={fill ? "" : undefined} className={cn(fill && "min-h-0 flex-1")}>
        <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
          No directory matches that.
        </CommandEmpty>
        {sections.map((section) => (
          <CommandGroup key={section.id} heading={section.heading}>
            {section.scopes.map((scope) => (
              <CommandItem
                key={scope.key}
                value={`${scope.label} ${scope.detail} ${scope.hostName}`}
                disabled={!scope.online}
                onSelect={() => onPick(scope.key)}
                className="gap-2.5"
              >
                <Icon
                  name={section.icon}
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="truncate">{scope.label}</span>
                    {scope.kind === "worktree" ? (
                      <span className="bb-ft-chip shrink-0">worktree</span>
                    ) : null}
                  </span>
                  <span className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                    <span className="min-w-0 flex-1 truncate font-mono">
                      {shortenPath(scope.detail)}
                    </span>
                    {/* The machine is metadata, not part of the path, and not
                        worth the name's width either: beside the label it took
                        half the row and cut every project to "bb-plugin-flo…".
                        On the path's line it costs only path, which already
                        elides its least useful end. The cap lives in styles.css
                        for the reason given there. */}
                    {showHosts || !scope.online ? (
                      <span data-bb-ft-host="" className="shrink-0 truncate opacity-80">
                        {showHosts ? scope.hostName : null}
                        {!scope.online ? (showHosts ? " · offline" : "offline") : null}
                      </span>
                    ) : null}
                  </span>
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
