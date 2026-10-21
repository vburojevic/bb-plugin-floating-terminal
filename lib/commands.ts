// Turning what an agent wrote into something a shell can take.
//
// "Paste into terminal" works from two places: a highlighted selection, which
// is used as-is, and a whole message, where the command is the first shell
// code block in it. Either way the text lands at the prompt and waits for
// Enter — nothing here runs anything.

/** Fence languages that hold a command rather than a program. */
const SHELL_LANGUAGES = new Set([
  "",
  "sh",
  "bash",
  "zsh",
  "fish",
  "shell",
  "console",
  "terminal",
  "shellsession",
  "ps1",
  "powershell",
  "pwsh",
]);

/**
 * `$ npm test` in a console transcript is a prompt followed by a command; the
 * `$ ` is not part of what should be typed. Only stripped when every line that
 * has content carries one, so a script that happens to contain a `$` is left
 * alone.
 */
function stripPrompts(text: string): string {
  const lines = text.split("\n");
  const content = lines.filter((line) => line.trim() !== "");
  if (content.length === 0) return text;
  const prompted = content.every((line) => /^\s*[$%>❯]\s/.test(line));
  if (!prompted) return text;
  return lines.map((line) => line.replace(/^\s*[$%>❯]\s/, "")).join("\n");
}

/** Trailing newlines would press Enter on the user's behalf. */
function settle(text: string): string {
  return stripPrompts(text.replace(/\r\n/g, "\n")).replace(/\s+$/, "");
}

/** The first shell-looking fenced block in a Markdown message, if any. */
export function extractCommand(markdown: string): string | null {
  const fence = /^([ \t]*)(`{3,}|~{3,})[ \t]*([\w+#.-]*)[^\n]*\n([\s\S]*?)^\1\2[ \t]*$/gm;
  for (const match of markdown.matchAll(fence)) {
    const language = (match[3] ?? "").toLowerCase();
    if (!SHELL_LANGUAGES.has(language)) continue;
    const body = settle(match[4] ?? "");
    if (body !== "") return body;
  }
  return null;
}

/** A highlighted selection, made safe to paste. Null when nothing is left. */
export function commandFromSelection(selection: string): string | null {
  const body = settle(selection);
  return body === "" ? null : body;
}

/**
 * Terminal output headed for the agent: fenced so the composer keeps its
 * spacing, with any fence inside it lengthened past.
 */
export function quoteForAgent(output: string): string {
  const body = output.replace(/\s+$/, "");
  const longest = Math.max(
    2,
    ...Array.from(body.matchAll(/`+/g), (match) => match[0].length),
  );
  const fence = "`".repeat(longest + 1);
  return `${fence}console\n${body}\n${fence}`;
}
