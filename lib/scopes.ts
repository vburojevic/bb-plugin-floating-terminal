// Directories a shell can start in, and the order they are offered in.
//
// The order is the design. A flat dump of every project and machine is a
// filing cabinet; putting the directories you actually opened at the top makes
// the list answer "where do you want to work" instead of "here is everything".
// Kept separate from the component so the ranking is testable on its own.

export interface ScopeOption {
  key: string;
  label: string;
  detail: string;
  hostName: string;
  online: boolean;
  kind: "project" | "home" | "worktree";
}

/** BB icon names; kept as a plain string so lib/ stays free of UI imports. */
export interface ScopeSection {
  id: "here" | "recent" | "projects" | "machines";
  heading: string;
  icon: "Clock" | "FolderGit" | "GitBranch" | "Laptop";
  scopes: ScopeOption[];
}

/** The glyph a directory is drawn with wherever it appears. */
export function scopeIcon(kind: ScopeOption["kind"]): ScopeSection["icon"] {
  if (kind === "worktree") return "GitBranch";
  if (kind === "home") return "Laptop";
  return "FolderGit";
}

/** Longest path shown untouched; past this the head is elided. */
const PATH_BUDGET = 30;
/** Trailing segments kept, because the leaf is what names the directory. */
const PATH_TAIL_SEGMENTS = 2;

/**
 * `/Users/me/Git/acme-storefront` -> `…/Git/acme-storefront`.
 *
 * These rows truncate, and CSS truncates the end — which is exactly the part
 * that identifies the directory. Eliding the head instead keeps the useful
 * half. Deliberately not `~`-abbreviation: without knowing which user the
 * shell runs as, `/Users/someone-else/x` would be rewritten into a claim about
 * the current user's home that is simply false.
 */
export function shortenPath(path: string): string {
  if (path.length <= PATH_BUDGET) return path;
  const segments = path.split("/").filter((part) => part !== "");
  if (segments.length <= PATH_TAIL_SEGMENTS) return path;
  return `…/${segments.slice(-PATH_TAIL_SEGMENTS).join("/")}`;
}

/**
 * `here` is the directory the person is looking at — the thread's worktree,
 * or the project in view — and goes first, because "a shell where I am" is
 * the question most opens are asking. It is never repeated further down.
 */
export function buildSections(
  scopes: ScopeOption[],
  recentScopeKeys: string[],
  here: ScopeOption | null = null,
): ScopeSection[] {
  const byKey = new Map(scopes.map((scope) => [scope.key, scope] as const));
  // A remembered key whose project or machine is gone simply drops out.
  const recent = recentScopeKeys
    .filter((key) => key !== here?.key)
    .map((key) => byKey.get(key))
    .filter((scope): scope is ScopeOption => scope !== undefined);
  const recentKeys = new Set(recent.map((scope) => scope.key));
  const rest = scopes.filter(
    (scope) => !recentKeys.has(scope.key) && scope.key !== here?.key,
  );

  const sections: ScopeSection[] = [
    {
      id: "here",
      heading: "Here",
      icon: scopeIcon(here?.kind ?? "project"),
      scopes: here === null ? [] : [here],
    },
    { id: "recent", heading: "Recent", icon: "Clock", scopes: recent },
    {
      id: "projects",
      heading: "Projects",
      icon: "FolderGit",
      scopes: rest.filter((scope) => scope.kind === "project"),
    },
    {
      id: "machines",
      heading: "Machines",
      icon: "Laptop",
      scopes: rest.filter((scope) => scope.kind === "home"),
    },
  ];
  return sections.filter((section) => section.scopes.length > 0);
}

/**
 * A worktree's tab label from its branch. bb names the branches it creates
 * `bb/<slug>-<thread id>`; the prefix and the id are bookkeeping, the slug is
 * the name. Any other branch is shown as it is.
 */
export function worktreeLabel(branch: string): string {
  const slug = branch.replace(/^bb\//, "").replace(/-thr_[a-z0-9]+$/i, "");
  return slug === "" ? branch : slug;
}
