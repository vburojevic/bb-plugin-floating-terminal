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

/** ANSI 16 is not part of bb's token set, so ship a pair tuned for each mode. */
const DARK_ANSI = {
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

const LIGHT_ANSI = {
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

export function resolveTerminalTheme(scope: HTMLElement): ResolvedTheme {
  const background = token(scope, "--card", "#16181d");
  const foreground = token(scope, "--card-foreground", "#e6e9ef");
  const isDark = luminance(background) < 0.5;
  const ansi = isDark ? DARK_ANSI : LIGHT_ANSI;

  return {
    isDark,
    xterm: {
      background,
      foreground,
      cursor: token(scope, "--primary", foreground),
      cursorAccent: background,
      // 45% alpha keeps the glyphs readable through the selection in both modes.
      selectionBackground: `${token(scope, "--primary", "#5b8cff")}73`,
      ...ansi,
    },
  };
}

export function resolveMonoFont(scope: HTMLElement): string {
  const declared = getComputedStyle(scope).getPropertyValue("--font-mono").trim();
  const fallback =
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';
  // xterm applies this as a literal font-family, so an unresolved var() would
  // invalidate the whole declaration rather than falling through the list.
  if (declared === "" || declared.includes("var(")) return fallback;
  return `${declared}, ${fallback}`;
}
