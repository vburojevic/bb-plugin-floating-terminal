// Find in scrollback.
//
// Opened by Cmd/Ctrl+F from inside the terminal, the ⋯ menu, or the `find` key
// on the mobile bar. Deliberately small: a query, a count, case and regex
// switches, previous/next, close. It floats over the top-right of the terminal
// so the output being searched stays visible, and Escape puts focus straight
// back at the prompt.
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import type { FindOptions } from "@/lib/pump";
import { cn } from "@/lib/utils";

export interface FindBarProps {
  query: string;
  options: FindOptions;
  /** Null until a search has run; the count renders only when real. */
  results: { index: number; count: number } | null;
  onQueryChange: (query: string) => void;
  onOptionsChange: (options: FindOptions) => void;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
}

function Toggle({
  label,
  on,
  onChange,
  children,
}: {
  label: string;
  on: boolean;
  onChange: (on: boolean) => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={on}
      title={label}
      onClick={() => onChange(!on)}
      className={cn("bb-ft-find-toggle", on ? "bb-ft-find-toggle-on" : null)}
    >
      {children}
    </button>
  );
}

export function FindBar({
  query,
  options,
  results,
  onQueryChange,
  onOptionsChange,
  onNext,
  onPrevious,
  onClose,
}: FindBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // The bar exists to be typed into; focus it the moment it appears.
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  const searched = results !== null && query !== "";
  const missed = searched && results.count === 0;

  return (
    <div
      data-no-drag=""
      className="bb-ft-find absolute right-2 top-2 z-10 flex items-center gap-0.5"
      role="search"
      aria-label="Find in scrollback"
      data-missed={missed ? "" : undefined}
    >
      <Icon name="Search" className="ml-1.5 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
      <Input
        ref={inputRef}
        value={query}
        placeholder="Find"
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        aria-label="Find"
        className="bb-ft-find-input h-7 border-none bg-transparent px-1.5 shadow-none focus-visible:ring-0"
        onChange={(event) => onQueryChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            if (event.shiftKey) onPrevious();
            else onNext();
          } else if (event.key === "Escape") {
            event.preventDefault();
            onClose();
          }
        }}
      />
      {/* 0/0 for a query nothing matches — silence would read as "still searching". */}
      {searched ? (
        <span className="bb-ft-find-count" aria-live="polite">
          {results.count === 0 ? "No results" : `${results.index + 1} of ${results.count}`}
        </span>
      ) : null}
      <Toggle
        label="Match case"
        on={options.caseSensitive === true}
        onChange={(caseSensitive) => onOptionsChange({ ...options, caseSensitive })}
      >
        Aa
      </Toggle>
      <Toggle
        label="Regular expression"
        on={options.regex === true}
        onChange={(regex) => onOptionsChange({ ...options, regex })}
      >
        .*
      </Toggle>
      <span className="bb-ft-find-rule" aria-hidden="true" />
      <Button
        variant="ghost"
        size="icon"
        className="bb-ft-find-button"
        aria-label="Previous match (Shift+Enter)"
        disabled={missed}
        onClick={onPrevious}
      >
        <Icon name="ChevronUp" className="size-3.5" aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="bb-ft-find-button"
        aria-label="Next match (Enter)"
        disabled={missed}
        onClick={onNext}
      >
        <Icon name="ChevronDown" className="size-3.5" aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="bb-ft-find-button"
        aria-label="Close find (Escape)"
        onClick={onClose}
      >
        <Icon name="X" className="size-3.5" aria-hidden="true" />
      </Button>
    </div>
  );
}
