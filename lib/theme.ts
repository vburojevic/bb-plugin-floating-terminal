// Deriving an xterm theme from the host's live theme tokens.
//
// bb's palette is authored in oklch, which xterm's own colour parser does not
// understand, so every token is round-tripped through a canvas to get plain
// sRGB hex. That also means custom and plugin-contributed palettes work without
// this file knowing anything about them.
import type { ITheme } from "@xterm/xterm";

let probeCanvas: CanvasRenderingContext2D | null = null;

function toHex(cssColor: string, fallback: string): string {
  if (cssColor.trim() === "") return fallback;
  if (probeCanvas === null) {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    probeCanvas = canvas.getContext("2d", { willReadFrequently: true });
  }
  if (probeCanvas === null) return fallback;
  try {
    probeCanvas.clearRect(0, 0, 1, 1);
    probeCanvas.fillStyle = "#000000";
    probeCanvas.fillStyle = cssColor;
    // An unparseable value leaves fillStyle at the previous colour, so a token
    // we cannot read falls back rather than silently painting black.
    if (probeCanvas.fillStyle === "#000000" && cssColor !== "#000000") {
      return fallback;
    }
    probeCanvas.fillRect(0, 0, 1, 1);
    const [r, g, b] = probeCanvas.getImageData(0, 0, 1, 1).data;
    return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
  } catch {
    return fallback;
  }
}

function luminance(hex: string): number {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * bb publishes the full ANSI 16 as `--ansi-0` … `--ansi-15`, and every built-in
 * theme (nord, dracula, solarized, gruvbox, catppuccin) overrides them — so the
 * host tokens are read first and these pairs are only the fallback for a host
 * that does not define them. Matching bb's own terminal here is the whole point:
 * without it a themed bb shows one red in its terminal panel and another in this
 * window.
 */
const ANSI_TOKEN_NAMES = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite",
] as const;

type AnsiName = (typeof ANSI_TOKEN_NAMES)[number];
type AnsiPalette = Record<AnsiName, string>;

const DARK_ANSI: AnsiPalette = {
  black: "#3b4048",
  red: "#e06c75",
  green: "#98c379",
  yellow: "#e5c07b",
  blue: "#61afef",
  magenta: "#c678dd",
  cyan: "#56b6c2",
  white: "#abb2bf",
  brightBlack: "#5c6370",
  brightRed: "#ef7a85",
  brightGreen: "#a9d47f",
  brightYellow: "#f0ca8e",
  brightBlue: "#7fbdf5",
  brightMagenta: "#d391e6",
  brightCyan: "#68c4cf",
  brightWhite: "#e6e9ef",
};

const LIGHT_ANSI: AnsiPalette = {
  black: "#3b4252",
  red: "#c9184a",
  green: "#3f7d20",
  yellow: "#9a6700",
  blue: "#1f6feb",
  magenta: "#8250df",
  cyan: "#137a7f",
  white: "#5c6370",
  brightBlack: "#7a828e",
  brightRed: "#e5484d",
  brightGreen: "#4f9a2b",
  brightYellow: "#b8860b",
  brightBlue: "#3b82f6",
  brightMagenta: "#a371f7",
  brightCyan: "#199aa1",
  brightWhite: "#2e3440",
};

/**
 * Read a CSS custom property as it resolves *inside the window*, so plugin and
 * per-surface overrides are honoured rather than only `:root`.
 */
function token(scope: HTMLElement, name: string, fallback: string): string {
  const raw = getComputedStyle(scope).getPropertyValue(name);
  return toHex(raw.trim(), fallback);
}

export interface ResolvedTheme {
  xterm: ITheme;
  isDark: boolean;
}

/** `--ansi-0` … `--ansi-15`, each falling back to this mode's tuned pair. */
function resolveAnsi(scope: HTMLElement, fallback: AnsiPalette): AnsiPalette {
  const palette = {} as AnsiPalette;
  ANSI_TOKEN_NAMES.forEach((name, index) => {
    palette[name] = token(scope, `--ansi-${index}`, fallback[name]);
  });
  return palette;
}

export function resolveTerminalTheme(scope: HTMLElement): ResolvedTheme {
  const background = token(scope, "--card", "#16181d");
  const foreground = token(scope, "--card-foreground", "#e6e9ef");
  const isDark = luminance(background) < 0.5;
  const ansi = resolveAnsi(scope, isDark ? DARK_ANSI : LIGHT_ANSI);

  return {
    isDark,
    xterm: {
      background,
      foreground,
      cursor: token(scope, "--primary", foreground),
      cursorAccent: background,
      // 45% alpha keeps the glyphs readable through the selection in both modes.
      selectionBackground: `${token(scope, "--primary", "#5b8cff")}73`,
      // xterm 6's visible scrollbar is a VS Code slider painted from these,
      // not from CSS — without them it ships VS Code grey into a bb window.
      scrollbarSliderBackground: `${token(scope, "--muted-foreground", "#7a828e")}4d`,
      scrollbarSliderHoverBackground: `${token(scope, "--muted-foreground", "#7a828e")}80`,
      scrollbarSliderActiveBackground: `${token(scope, "--muted-foreground", "#7a828e")}a6`,
      ...ansi,
    },
  };
}

/**
 * The same Nerd Font stack bb's own terminal asks for, so a powerline prompt or
 * a devicon renders here exactly as it does in bb's terminal panel rather than
 * as tofu. These names only match if the fonts are installed; when they are not,
 * the host's `--font-mono` still gets its turn before the generic fallbacks.
 */
const NERD_FONTS =
  '"JetBrainsMono Nerd Font Mono", "MesloLGS NF", "Symbols Nerd Font Mono"';
const GENERIC_MONO =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';
/**
 * Last resort, and deliberately last: the bundled symbol font in
 * fonts/nerd-symbols.css. Fallback is resolved per character, so an installed
 * Nerd Font above still supplies its own glyphs and this only draws the
 * codepoints nothing else can — which on a device where no Nerd Font can be
 * installed is every icon a shell prints.
 */
const BUNDLED_SYMBOLS = '"BB FT Nerd Symbols"';

export function resolveMonoFont(scope: HTMLElement): string {
  const declared = getComputedStyle(scope).getPropertyValue("--font-mono").trim();
  // xterm applies this as a literal font-family, so an unresolved var() would
  // invalidate the whole declaration rather than falling through the list.
  const host = declared === "" || declared.includes("var(") ? null : declared;
  return [NERD_FONTS, host, GENERIC_MONO, BUNDLED_SYMBOLS]
    .filter((part) => part !== null)
    .join(", ");
}
