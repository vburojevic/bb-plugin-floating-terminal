// Window geometry: persistence, viewport clamping, dragging, and resizing.
//
// Kept in plain DOM rather than React because the floating window is mounted by
// a content script into document.body, outside the host's component tree.

export interface Frame {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Viewport {
  width: number;
  height: number;
}

// v2: the default position changed from a magic offset to a real anchor, so
// previously saved geometry is deliberately discarded once.
const STORAGE_KEY = "bb-plugin-floating-terminal:frame:v5";
const MIN_WIDTH = 360;
const MIN_HEIGHT = 180;
/** One inset for every edge, so the corner reads as a corner. */
const GUTTER = 40;
/** The inset snapped layouts keep from the viewport and from each other. */
const SNAP_GUTTER = 16;

function currentViewport(): Viewport {
  return { width: window.innerWidth, height: window.innerHeight };
}

/**
 * Rest in the bottom-left corner with the same gap on the leading edge as
 * underneath. That corner is also the transform origin of the open animation,
 * so the window grows out of the side the trigger button lives on.
 */
export function defaultFrame(viewport: Viewport = currentViewport()): Frame {
  const width = Math.min(760, Math.max(MIN_WIDTH, viewport.width - 2 * GUTTER));
  const height = Math.min(
    460,
    Math.max(MIN_HEIGHT, viewport.height - 2 * GUTTER),
  );
  return clampFrame(
    {
      x: GUTTER,
      y: viewport.height - height - GUTTER,
      width,
      height,
    },
    viewport,
  );
}

/**
 * Keep the whole window on screen.
 *
 * This used to let all but 140px of the window hang off the right edge, the
 * way a desktop OS lets a window slide off a monitor. Here that hid exactly the
 * controls that matter — hide, restart, maximize all live on the right of the
 * title bar — so a window placed on a wide screen came back on an iPad in
 * portrait, or a narrowed bb window, with no way to close it. The window is a
 * panel inside the app, not an OS window, so it stays entirely inside it.
 */
export function clampFrame(
  frame: Frame,
  viewport: Viewport = currentViewport(),
): Frame {
  const width = Math.round(
    Math.min(Math.max(frame.width, MIN_WIDTH), viewport.width),
  );
  const height = Math.round(
    Math.min(Math.max(frame.height, MIN_HEIGHT), viewport.height),
  );
  return {
    width,
    height,
    x: Math.round(Math.min(Math.max(frame.x, 0), viewport.width - width)),
    y: Math.round(Math.min(Math.max(frame.y, 0), viewport.height - height)),
  };
}

export function loadFrame(): Frame {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return defaultFrame();
    const parsed = JSON.parse(raw) as Partial<Frame>;
    const numbers = [parsed.x, parsed.y, parsed.width, parsed.height];
    if (numbers.some((value) => typeof value !== "number" || !Number.isFinite(value))) {
      return defaultFrame();
    }
    return clampFrame(parsed as Frame);
  } catch {
    return defaultFrame();
  }
}

export function saveFrame(frame: Frame): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(frame));
  } catch {
    // Private mode or a full quota: geometry just falls back to the default.
  }
}

export type Edge = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export const RESIZE_EDGES: readonly Edge[] = [
  "n",
  "s",
  "e",
  "w",
  "ne",
  "nw",
  "se",
  "sw",
];

/**
 * The frame a resize gesture produces. Each moving edge stops at the viewport
 * and at the minimum size *on its own side*: clamping afterwards instead would
 * shove the opposite edge along once the dragged one hit the screen edge, so
 * the window walked away from the pointer.
 */
export function resizeFrame(
  start: Frame,
  edge: Edge,
  dx: number,
  dy: number,
  viewport: Viewport = currentViewport(),
): Frame {
  let { x, y, width, height } = start;
  const right = start.x + start.width;
  const bottom = start.y + start.height;
  if (edge.includes("e")) {
    width = Math.min(Math.max(start.width + dx, MIN_WIDTH), viewport.width - start.x);
  }
  if (edge.includes("s")) {
    height = Math.min(
      Math.max(start.height + dy, MIN_HEIGHT),
      viewport.height - start.y,
    );
  }
  if (edge.includes("w")) {
    x = Math.min(Math.max(start.x + dx, 0), right - MIN_WIDTH);
    width = right - x;
  }
  if (edge.includes("n")) {
    y = Math.min(Math.max(start.y + dy, 0), bottom - MIN_HEIGHT);
    height = bottom - y;
  }
  return clampFrame({ x, y, width, height }, viewport);
}

export type SnapTarget = "left" | "right" | "bottom";

/**
 * One-shot layouts for getting the window out of the way of the thread: a
 * half of the screen, or a full-width strip along the bottom the way an
 * editor's terminal panel sits. They become the remembered frame — a snap is
 * just a very precise drag.
 */
export function snapFrame(
  target: SnapTarget,
  viewport: Viewport = currentViewport(),
): Frame {
  const g = SNAP_GUTTER;
  const halfWidth = Math.floor((viewport.width - 3 * g) / 2);
  switch (target) {
    case "left":
      return clampFrame(
        { x: g, y: g, width: halfWidth, height: viewport.height - 2 * g },
        viewport,
      );
    case "right":
      return clampFrame(
        {
          x: viewport.width - g - halfWidth,
          y: g,
          width: halfWidth,
          height: viewport.height - 2 * g,
        },
        viewport,
      );
    case "bottom": {
      const height = Math.floor((viewport.height - 3 * g) / 2);
      return clampFrame(
        {
          x: g,
          y: viewport.height - g - height,
          width: viewport.width - 2 * g,
          height,
        },
        viewport,
      );
    }
  }
}

interface GestureOptions {
  getFrame: () => Frame;
  /** Called on every pointer move with the in-progress geometry. */
  onChange: (frame: Frame) => void;
  /** Called once on release, for persistence and a final terminal refit. */
  onCommit: (frame: Frame) => void;
  /** A gesture started (with its kind) or ended (null). Drives the cursor. */
  onActive?: (gesture: "drag" | "resize" | null) => void;
}

function trackPointer(
  element: HTMLElement,
  kind: "drag" | "resize",
  compute: (dx: number, dy: number, start: Frame) => Frame,
  { getFrame, onChange, onCommit, onActive }: GestureOptions,
  signal: AbortSignal,
): void {
  element.addEventListener(
    "pointerdown",
    (event) => {
      if (event.button !== 0) return;
      // Controls inside the drag handle (the directory picker, the buttons)
      // must stay clickable.
      if ((event.target as HTMLElement | null)?.closest("[data-no-drag]") != null) {
        return;
      }
      event.preventDefault();
      const startX = event.clientX;
      const startY = event.clientY;
      const startFrame = getFrame();
      let latest = startFrame;
      element.setPointerCapture(event.pointerId);
      onActive?.(kind);

      const move = (moveEvent: PointerEvent) => {
        latest = compute(
          moveEvent.clientX - startX,
          moveEvent.clientY - startY,
          startFrame,
        );
        onChange(latest);
      };
      const done = () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerup", done);
        element.removeEventListener("pointercancel", done);
        onActive?.(null);
        onCommit(latest);
      };

      element.addEventListener("pointermove", move, { signal });
      element.addEventListener("pointerup", done, { signal });
      element.addEventListener("pointercancel", done, { signal });
    },
    { signal },
  );
}

export function installDrag(
  handle: HTMLElement,
  options: GestureOptions,
  signal: AbortSignal,
): void {
  trackPointer(
    handle,
    "drag",
    (dx, dy, start) => clampFrame({ ...start, x: start.x + dx, y: start.y + dy }),
    options,
    signal,
  );
}

export function installResize(
  handle: HTMLElement,
  edge: Edge,
  options: GestureOptions,
  signal: AbortSignal,
): void {
  trackPointer(
    handle,
    "resize",
    (dx, dy, start) => resizeFrame(start, edge, dx, dy),
    options,
    signal,
  );
}
