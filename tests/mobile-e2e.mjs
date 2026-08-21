// Mobile end-to-end pass, driven against a running bb.
//
//   npm run test:mobile                       # the whole matrix
//   node tests/mobile-e2e.mjs webkit "iPhone 14 Pro"
//
// This is not part of `npm test`: it needs a real bb on the other end, and it
// opens and closes real shells there (it asserts it leaves none behind). Point
// it somewhere else with BB_APP_URL.
//
// Touch gestures are dispatched over CDP, which only Chromium exposes. On
// WebKit — worth running because it is the engine iOS Safari uses — those
// checks report SKIP rather than passing silently.
//
// Two things this file learned the hard way, both of which produced a false
// "the product is broken":
//
//   * A flick towards the newest output has nowhere to glide once it hits the
//     bottom stop, so momentum has to be measured going back into history.
//   * The pump polls, and against a remote host it can be seconds behind the
//     pty. Wait for the scrollback to exist rather than sleeping and hoping.
import { chromium, webkit, devices } from "playwright";
import { execSync } from "node:child_process";

const ENGINE = process.argv[2] ?? "chromium";
const DEVICE = process.argv[3] ?? "iPhone 14 Pro";
const APP = process.env.BB_APP_URL ?? "http://localhost:38886";

const results = [];
const pass = (n, d = "") => results.push({ s: "PASS", n, d });
const fail = (n, d = "") => results.push({ s: "FAIL", n, d });
const skip = (n, d = "") => results.push({ s: "SKIP", n, d });
const check = (n, ok, d = "") => (ok ? pass(n, d) : fail(n, d));

const sh = (c) => execSync(c, { encoding: "utf8" }).trim();
/** Bytes the pty has emitted since `seq`; a pager redrawing is the only signal
 *  that a swipe reached it, since input does not stamp the session record. */
const outputSince = (id, seq) => {
  const j = JSON.parse(sh(`curl -s '${APP}/api/v1/terminals/${id}/output?sinceSeq=${seq}'`));
  const bytes = (j.chunks ?? []).reduce((n, c) => n + Buffer.from(c.dataBase64, "base64").length, 0);
  return { bytes, nextSeq: j.nextSeq };
};

const machines = (() => {
  try {
    const j = JSON.parse(sh("bb machine list --json"));
    const list = Array.isArray(j) ? j : (j.machines ?? j.hosts ?? []);
    return list.map((m) => m.id).filter(Boolean);
  } catch {
    return [];
  }
})();

const sessions = () => {
  const out = [];
  for (const m of machines) {
    try {
      const j = JSON.parse(sh(`bb terminal list --machine ${m} --json`));
      for (const s of j.sessions ?? []) out.push(s);
    } catch {}
  }
  return out;
};

const launcher = ENGINE === "webkit" ? webkit : chromium;
const browser = await launcher.launch({ headless: ENGINE === "chromium" });
const device = devices[DEVICE];
const ctx = await browser.newContext({ ...device, colorScheme: "dark" });
const page = await ctx.newPage();
const cdp = ENGINE === "chromium" ? await ctx.newCDPSession(page) : null;
const errors = [];
page.on("pageerror", (e) => errors.push(String(e).slice(0, 180)));
const wait = (ms) => page.waitForTimeout(ms);

/**
 * Poll for a condition instead of sleeping at it. Everything on the other side
 * of this harness is asynchronous — an RPC to a host that may be remote, a pump
 * that polls with backoff — so a fixed sleep does not assert "it works", it
 * asserts "it works within n milliseconds on this run", which is how this file
 * twice reported a healthy build as broken.
 */
const until = async (fn, timeoutMs = 20000, stepMs = 400) => {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    if (await fn()) return true;
    if (Date.now() > deadline) return false;
    await wait(stepMs);
  }
};

const swipe = async (x, y0, dy, steps = 10, delay = 0) => {
  if (!cdp) return false;
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x, y: y0 }] });
  for (let i = 1; i <= steps; i++) {
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x, y: Math.round(y0 + (dy * i) / steps) }],
    });
    if (delay) await wait(delay);
  }
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  return true;
};

await page.goto(APP, { waitUntil: "domcontentloaded" });
await wait(ENGINE === "webkit" ? 12000 : 10000);
const compact = (device.viewport?.width ?? 0) < 768;

// ---------------------------------------------------------------- open it
await page.keyboard.down("Control");
await page.keyboard.press("`");
await page.keyboard.up("Control");
await wait(3200);
const term = page.locator('[aria-label="Floating terminal"]');
check("window opens", (await term.count()) === 1);

// ------------------------------------------------------------ 1. layout
const layout = await page.evaluate(() => {
  const w = document.querySelector('[aria-label="Floating terminal"]');
  if (!w) return null;
  const r = w.getBoundingClientRect();
  const bd = document.querySelector(".bb-ft-backdrop");
  const grip = w.querySelector("[data-bb-ft-grip]");
  return {
    layout: w.dataset.layout,
    z: Number(getComputedStyle(w).zIndex),
    rect: [r.x, r.y, r.width, r.height].map(Math.round),
    vw: window.innerWidth,
    vh: window.innerHeight,
    inline: /left:|width:/.test(w.getAttribute("style") ?? ""),
    edges: [...w.children].filter((c) => String(c.className).startsWith("absolute")).length,
    backdropBlur: bd ? getComputedStyle(bd).backdropFilter : null,
    gripDisplay: grip ? getComputedStyle(grip).display : "absent",
    radius: getComputedStyle(w).borderRadius,
  };
});
check("layout mode", layout.layout === (compact ? "sheet" : "window"), layout.layout);

if (compact) {
  const [x, y, w, h] = layout.rect;
  const insets = [x, layout.vw - (x + w), y, layout.vh - (y + h)];
  check("even insets on all sides", new Set(insets).size === 1 && insets[0] > 0, `l/r/t/b = ${insets.join("/")}`);
  check("fills the viewport", w > layout.vw * 0.9 && h > layout.vh * 0.9, `${w}x${h} of ${layout.vw}x${layout.vh}`);
  check("stylesheet owns geometry", layout.inline === false);
  check("no resize handles", layout.edges === 0);
  check("backdrop is blurred", /blur/.test(layout.backdropBlur ?? ""), layout.backdropBlur);
  check("drag grip hidden", layout.gripDisplay === "none", layout.gripDisplay);
} else {
  check("keeps window geometry", layout.inline === true);
  check("resize handles present", layout.edges === 8, String(layout.edges));
  check("no backdrop", layout.backdropBlur === null);
}

// ------------------------------- 2. above bb's chrome (the z-50 toggle)
const cover = await page.evaluate(() => {
  const w = document.querySelector('[aria-label="Floating terminal"]');
  const r = w.getBoundingClientRect();
  const top = document.elementsFromPoint(r.x + 22, r.y + 18)[0];
  return { inside: w.contains(top), tag: `${top?.tagName}.${String(top?.className).slice(0, 30)}` };
});
check("nothing of bb's paints over the tab bar", cover.inside, cover.tag);
check("z-index clears bb chrome (50) and stays under its top layer (70)", layout.z > 50 && layout.z < 70, String(layout.z));

// ------------------------------------------------------- 3. empty state
for (let i = 0; i < 8; i++) {
  const c = term.getByRole("button", { name: /^Close / });
  if ((await c.count()) === 0) break;
  await c.first().click();
  await wait(1300);
}
await wait(1200);
const empty = await page.evaluate(() => {
  const w = document.querySelector('[aria-label="Floating terminal"]');
  const list = w.querySelector("[cmdk-list]");
  const r = (e) => (e ? e.getBoundingClientRect() : null);
  const wr = w.getBoundingClientRect();
  const inside = (e) => { const b = r(e); return !!b && b.top >= wr.top - 1 && b.bottom <= wr.bottom + 1; };
  return {
    heading: w.querySelector("h2")?.textContent,
    hasInput: !!w.querySelector("[cmdk-input]"),
    groups: [...w.querySelectorAll("[cmdk-group-heading]")].map((e) => e.textContent),
    headingVisible: inside(w.querySelector("h2")),
    listInside: inside(list),
    listScrollable: list ? list.scrollHeight > list.clientHeight : false,
    listScrollTop: list?.scrollTop ?? null,
  };
});
check("empty state heading visible", empty.heading === "Start a shell" && empty.headingVisible);
check("directory list stays inside the sheet", empty.listInside);
check("groups ordered Recent -> Projects -> Machines",
  JSON.stringify(empty.groups) === JSON.stringify(["Recent", "Projects", "Machines"]) ||
  JSON.stringify(empty.groups) === JSON.stringify(["Projects", "Machines"]), empty.groups.join(" > "));

if (cdp && empty.listScrollable) {
  const lb = await term.locator("[cmdk-list]").boundingBox();
  await swipe(Math.round(lb.x + lb.width / 2), Math.round(lb.y + lb.height * 0.75), -170, 10, 8);
  await wait(700);
  const after = await term.locator("[cmdk-list]").evaluate((e) => e.scrollTop);
  check("directory list scrolls by touch", after > 0, `scrollTop ${after}`);
} else if (!cdp) skip("directory list scrolls by touch", "needs CDP");
else skip("directory list scrolls by touch", "list fits, nothing to scroll");

// --------------------------------------------------------- 4. open a shell
const before = sessions().length;
await page.locator('[cmdk-item][aria-disabled="false"]').first().click();
const opened = await until(
  async () => (await term.getByRole("tab").count()) === 1 && sessions().length === before + 1,
);
check("opening a directory starts a shell", opened, `${sessions().length - before} new session(s)`);

// ------------------------------------------------------------ 5. key bar
// Only in sheet mode: a window-mode viewport has a real keyboard with all of
// these on it already.
const bar = term.locator(".bb-ft-keybar");
if (compact) {
  check("key bar present", (await term.getByRole("toolbar", { name: "Terminal keys" }).count()) === 1);
  const labels = await bar.locator("button").evaluateAll((bs) => bs.map((b) => b.textContent));
  check("key bar carries the keys a phone lacks",
    ["esc", "tab", "ctrl", "←", "↑", "↓", "→", "^C"].every((k) => labels.includes(k)),
    labels.join(" "));
  const keyBox = await bar.locator("button").first().boundingBox();
  check("touch targets are at least 40px", keyBox.height >= 40, `${Math.round(keyBox.height)}px`);
  const barScroll = await bar.evaluate((e) => { e.scrollBy({ left: 200 }); return e.scrollLeft; });
  check("key bar scrolls horizontally", barScroll > 0, `scrollLeft ${barScroll}`);

  // ----------------------------------------------------- 6. the ctrl latch
  await term.getByRole("button", { name: "Control", exact: true }).click();
  await wait(400);
  const armed = await term.getByRole("button", { name: "Control", exact: true }).getAttribute("aria-pressed");
  await page.keyboard.type("c");
  await wait(900);
  const cleared = await term.getByRole("button", { name: "Control", exact: true }).getAttribute("aria-pressed");
  check("ctrl latches, then clears when consumed", armed === "true" && cleared === "false", `${armed} -> ${cleared}`);
} else {
  check("no key bar in window mode", (await bar.count()) === 0);
  skip("ctrl latches, then clears when consumed", "window mode");
}

// ----------------------------------------------- 7. keys reach the shell
const id = sessions()[0]?.id;
if (id) {
  sh(`bb terminal send ${id} --text 'clear' --enter`);
  await wait(1200);
  sh(`bb terminal send ${id} --text 'seq 1 400' --enter`);
  await wait(3000);
}
const screen = term.locator(".xterm-screen").locator("visible=true").first();

/** The pump polls, and against a remote host it can be seconds behind the pty.
 *  Wait for the scrollback to actually exist rather than sleeping and hoping —
 *  a fixed sleep here reported "scrolling is broken" on a slow session. */
const hasScrollback = () => page.evaluate(() => {
  const v = document.querySelector('[aria-label="Floating terminal"] .scrollbar.vertical');
  const s = v?.querySelector(".slider");
  if (!v || !s) return false;
  return s.getBoundingClientRect().height < v.getBoundingClientRect().height - 4;
});
check("terminal catches up with the shell", await until(hasScrollback));

// -------------------------------------------------------- 8. tap to focus
if (cdp) {
  const sb = await screen.boundingBox();
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: Math.round(sb.x + sb.width / 2), y: Math.round(sb.y + 60) }] });
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await wait(700);
  const focused = await page.evaluate(() => document.querySelector('[aria-label="Floating terminal"] .xterm')?.classList.contains("focus"));
  check("tap focuses the terminal", focused === true);
} else skip("tap focuses the terminal", "needs CDP");

// ------------------------------------------------------- 9. touch scroll
const slider = () => page.evaluate(() => {
  const s = document.querySelector('[aria-label="Floating terminal"] .xterm-scrollable-element .scrollbar.vertical .slider');
  return s ? Math.round(s.getBoundingClientRect().top) : null;
});
if (cdp) {
  const sb = await screen.boundingBox();
  const cx = Math.round(sb.x + sb.width / 2), cy = Math.round(sb.y + sb.height / 2);
  const start = await slider();
  await swipe(cx, cy - 110, 220, 12, 12);
  await wait(500);
  const dragged = await slider();
  check("drag scrolls the scrollback", dragged !== null && dragged < start, `slider ${start} -> ${dragged}`);

  // Flick back into history: towards the newest output it would hit the bottom
  // stop instantly and there would be nothing left for the fling to carry.
  await swipe(cx, cy - 140, 280, 6, 0);
  await wait(150);
  const justAfter = await slider();
  await wait(1600);
  const settled = await slider();
  check("a flick keeps momentum after release", settled < justAfter, `${justAfter} -> ${settled}, carried ${justAfter - settled}px`);
} else {
  skip("drag scrolls the scrollback", "needs CDP");
  skip("a flick keeps momentum after release", "needs CDP");
}

// ------------------------------------------- 10. alt buffer (less/vim)
if (cdp && id) {
  sh(`bb terminal send ${id} --text $'\\003'`);
  await wait(600);
  sh(`bb terminal send ${id} --text 'seq 1 400 | less' --enter`);
  await wait(3000);
  const sb = await screen.boundingBox();
  const cx = Math.round(sb.x + sb.width / 2), cy = Math.round(sb.y + sb.height / 2);
  const mark = outputSince(id, 0).nextSeq;
  await swipe(cx, cy + 120, -240, 10, 10);
  await wait(1800);
  const redraw = outputSince(id, mark);
  check("swipe scrolls the alternate screen", redraw.bytes > 0, `pager redrew ${redraw.bytes} bytes`);
  sh(`bb terminal send ${id} --text 'q'`);
  await wait(800);
  sh(`bb terminal send ${id} --text $'\\003'`);
  await wait(400);
} else skip("swipe scrolls the alternate screen", "needs CDP");

// -------------------------------------------------------- 11. nerd font
const glyph = await page.evaluate(async () => {
  await document.fonts.load('16px "BB FT Nerd Symbols"', "");
  const draw = (font) => {
    const c = document.createElement("canvas"); c.width = 40; c.height = 40;
    const g = c.getContext("2d");
    g.fillStyle = "#fff"; g.font = `28px ${font}`; g.textBaseline = "middle";
    g.fillText("", 4, 20);
    const d = g.getImageData(0, 0, 40, 40).data;
    let ink = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 8) ink++;
    return ink;
  };
  const w = document.querySelector('[aria-label="Floating terminal"]');
  const declared = getComputedStyle(w).getPropertyValue("--font-mono").trim();
  const host = declared && !declared.includes("var(") ? declared + ", " : "";
  const stack = `"JetBrainsMono Nerd Font Mono", "MesloLGS NF", "Symbols Nerd Font Mono", ${host}ui-monospace, monospace, "BB FT Nerd Symbols"`;
  return { loaded: document.fonts.check('16px "BB FT Nerd Symbols"', ""), stack: draw(stack), tofu: draw('"No Such Font XYZ", monospace') };
});
check("bundled symbol font is loaded", glyph.loaded === true);
check("terminal stack draws a Nerd glyph", glyph.stack > glyph.tofu * 1.5, `ink ${glyph.stack} vs tofu ${glyph.tofu}`);

// ------------------------------------------------- 12. software keyboard
if (compact) {
  const kb = await page.evaluate(async () => {
    const w = document.querySelector('[aria-label="Floating terminal"]');
    const h0 = Math.round(w.getBoundingClientRect().height);
    const vv = window.visualViewport;
    const real = vv.height;
    Object.defineProperty(vv, "height", { configurable: true, get: () => real - 336 });
    vv.dispatchEvent(new Event("resize"));
    await new Promise((r) => setTimeout(r, 600));
    const h1 = Math.round(w.getBoundingClientRect().height);
    const flag = w.dataset.keyboard;
    Object.defineProperty(vv, "height", { configurable: true, get: () => real });
    vv.dispatchEvent(new Event("resize"));
    await new Promise((r) => setTimeout(r, 600));
    return { h0, h1, flag, h2: Math.round(w.getBoundingClientRect().height) };
  });
  check("sheet shrinks for the keyboard", kb.h1 < kb.h0 - 300 && kb.flag === "open", `${kb.h0} -> ${kb.h1}`);
  check("sheet restores when it closes", kb.h2 === kb.h0, `${kb.h1} -> ${kb.h2}`);
} else skip("sheet shrinks for the keyboard", "window mode");

// --------------------------------------------- 13. persistence + dismiss
if (compact) {
  const bd = page.locator(".bb-ft-backdrop");
  const box = await term.boundingBox();
  await page.mouse.click(Math.round(box.x + box.width / 2), 4);
  await wait(900);
  const hidden = await term.getAttribute("data-state");
  check("tapping the backdrop hides the sheet", hidden === "closed", hidden);
  await page.keyboard.down("Control"); await page.keyboard.press("`"); await page.keyboard.up("Control");
  check("reopening restores the running shell",
    await until(async () => (await term.getByRole("tab").count()) === 1, 10000));
} else {
  skip("tapping the backdrop hides the sheet", "window mode");
  check("reopening restores the running shell", (await term.getByRole("tab").count()) === 1);
}

// -------------------------------------------------------- 14. close down
for (let i = 0; i < 8; i++) {
  const c = term.getByRole("button", { name: /^Close / });
  if ((await c.count()) === 0) break;
  await c.first().click();
  await wait(1500);
}
await wait(1200);
check("closing the last tab returns the picker", (await term.locator("[cmdk-list]").count()) === 1);

// Closing is an RPC to the host that owns the pty, and against a remote one it
// lands well after the tab disappears. Wait for it rather than racing it — a
// genuine leak never clears, so a bounded wait still catches one.
check("no shells left behind", await until(() => sessions().length === before, 12000),
  `${sessions().length} sessions`);
check("no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

await browser.close();

const width = Math.max(...results.map((r) => r.n.length));
console.log(`\n${ENGINE} / ${DEVICE} (${device.viewport.width}x${device.viewport.height})`);
for (const r of results) console.log(`  ${r.s}  ${r.n.padEnd(width)}  ${r.d}`);
const failed = results.filter((r) => r.s === "FAIL").length;
console.log(`  ${results.filter((r) => r.s === "PASS").length} passed, ${failed} failed, ${results.filter((r) => r.s === "SKIP").length} skipped`);
process.exit(failed === 0 ? 0 : 1);
