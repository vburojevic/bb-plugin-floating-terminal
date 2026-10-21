// Per-device text size.
//
// The plugin setting is the default everywhere; this is the quick override from
// the window's menu. It lives in localStorage rather than plugin settings on
// purpose: the size that reads well on a laptop is not the one that reads well
// on a phone, and both are the same bb account.

const FONT_KEY = "bb-plugin-floating-terminal:font-size:v1";
export const MIN_FONT_SIZE = 9;
export const MAX_FONT_SIZE = 24;

export function clampFontSize(size: number): number {
  return Math.min(MAX_FONT_SIZE, Math.max(MIN_FONT_SIZE, Math.round(size)));
}

export function loadFontOverride(): number | null {
  try {
    const raw = window.localStorage.getItem(FONT_KEY);
    if (raw === null) return null;
    const value = Number.parseInt(raw, 10);
    return Number.isFinite(value) ? clampFontSize(value) : null;
  } catch {
    return null;
  }
}

/** Null forgets the override, so the plugin setting applies again. */
export function saveFontOverride(size: number | null): void {
  try {
    if (size === null) window.localStorage.removeItem(FONT_KEY);
    else window.localStorage.setItem(FONT_KEY, String(clampFontSize(size)));
  } catch {
    // Private mode or a full quota: the size just resets next session.
  }
}
