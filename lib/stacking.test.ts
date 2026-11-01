// Everything the window portals has to stack above the window.
//
// Menus, the phone drawer, dialogs and tooltips render at the end of <body>,
// outside the window, so their z-index competes with the window's own. When
// the window went to z-55 and they stayed at bb's default z-50, the + menu
// opened invisibly behind it (#1). A browser cannot catch that by hit-testing:
// a modal menu turns pointer events off on the rest of the page, so
// elementFromPoint looks straight through the window. The numbers can.
//
// This reads the sources rather than a rendered page, so a component added
// later from bb's registry, which arrives at z-50, fails here first.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = join(import.meta.dirname, "..");
const css = readFileSync(join(root, "styles.css"), "utf8");

/** The z-index declared in a rule's own block, e.g. `.bb-ft-window { ... }`. */
function ruleZ(selector: string): number {
  const block = css.match(new RegExp(`^${selector.replace(".", "\\.")} \\{([^}]*)\\}`, "m"));
  const z = block?.[1].match(/z-index:\s*(\d+)/);
  if (!z) throw new Error(`no z-index on ${selector}`);
  return Number(z[1]);
}

/** Vendored components that portal out of the window. */
const portaled = readdirSync(join(root, "components/ui"))
  .filter((name) => name.endsWith(".tsx"))
  .map((name) => ({ name, source: readFileSync(join(root, "components/ui", name), "utf8") }))
  .filter(({ source }) => source.includes("usePortalScopeProps"));

/** Every z-index utility in a source file: `z-50`, `z-[60]`. */
function zUtilities(source: string): number[] {
  return [...source.matchAll(/(?<![\w-])z-(?:(\d+)|\[(\d+)\])(?![\w-])/g)].map((m) =>
    Number(m[1] ?? m[2]),
  );
}

// bb keeps its dialogs and toasts at 70; nothing of ours may climb over them.
const BB_TOP_LAYER = 70;

describe("overlay stacking", () => {
  const windowZ = ruleZ(".bb-ft-window");

  it("keeps the sheet's backdrop under the window", () => {
    expect(ruleZ(".bb-ft-backdrop")).toBeLessThan(windowZ);
  });

  it("finds the portaled overlays to check", () => {
    expect(portaled.map(({ name }) => name)).toEqual(
      expect.arrayContaining(["dialog.tsx", "drawer.tsx", "dropdown-menu.tsx", "select.tsx", "tooltip.tsx"]),
    );
  });

  for (const { name, source } of portaled) {
    it(`stacks ${name} above the window and under bb's top layer`, () => {
      const layers = zUtilities(source);
      expect(layers.length, `${name} sets no z-index`).toBeGreaterThan(0);
      for (const z of layers) {
        expect(z, `${name} has z-${z}, at or under the window's ${windowZ}`).toBeGreaterThan(windowZ);
        expect(z).toBeLessThan(BB_TOP_LAYER);
      }
    });
  }
});
