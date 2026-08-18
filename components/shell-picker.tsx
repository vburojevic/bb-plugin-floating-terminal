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
  /** True when more than one machine is connected, so paths need qualifying. */
  showHosts: boolean;
  onPick: (scopeKey: string) => void;
  className?: string;
}

/** Search earns its place only once scanning the list stops being instant. */
const SEARCHABLE_FROM = 7;

export function ShellPicker({
  scopes,
  recentScopeKeys,
  showHosts,
  onPick,
  className,
}: ShellPickerProps) {
  const sections = buildSections(scopes, recentScopeKeys);
  const searchable = scopes.length >= SEARCHABLE_FROM;

  return (
    <Command
      // cmdk filters on the value; include the path and machine so searching
      // "scw" or "Git/Type" finds the right row, not just its display name.
      className={cn("flex min-h-0 flex-col bg-transparent", className)}
    >
      {searchable ? <CommandInput placeholder="Find a directory" /> : null}
      <CommandList className="max-h-full min-h-0 flex-1">
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
                  <span className="truncate">{scope.label}</span>
                  <span className="truncate font-mono text-xs text-muted-foreground">
                    {shortenPath(scope.detail)}
                  </span>
                </span>
                {/* The machine is metadata, not part of the path. Inline, it
                    put the same 19 characters in front of every row and made
                    the list unscannable. */}
                {showHosts || !scope.online ? (
                  <span className="shrink-0 self-center text-xs text-muted-foreground">
                    {showHosts ? scope.hostName : null}
                    {!scope.online ? (showHosts ? " · offline" : "offline") : null}
                  </span>
                ) : null}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
