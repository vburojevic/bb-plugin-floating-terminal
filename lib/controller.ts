// A tiny external store for the window's open state, and the bus everything
// outside the window talks to it through.
//
// Several things drive the window from outside React: the sidebar footer
// button (host-rendered, no component), the global Ctrl+` shortcut, palette
// commands, and the "Paste into terminal" message action. All of them call this
// singleton; the React tree subscribes via useSyncExternalStore and registers
// one command handler. Module-level state is safe here because a content
// script instantiates this module once per bb window, tab, or remote client.

type Listener = () => void;

/** Where the person is looking in bb, as the route reports it. */
export interface HostContext {
  projectId: string | null;
  threadId: string | null;
}

export type WindowCommand =
  /** Open a shell in the thread's worktree, or the project's checkout. */
  | { kind: "new-here"; context: HostContext }
  /** Show the window with the directory picker ready. */
  | { kind: "pick" }
  /** Put text at the active prompt, opening a shell here if there is none. */
  | { kind: "paste"; text: string; context: HostContext }
  | { kind: "restart" }
  | { kind: "clear" }
  | { kind: "find" };

let open = false;
const listeners = new Set<Listener>();

let handler: ((command: WindowCommand) => void) | null = null;
/**
 * Commands that arrived before the window's root had mounted — a palette
 * command run before the window was ever opened. Flushed in order once it has.
 */
const pending: WindowCommand[] = [];

let tabCount = 0;

function emit(): void {
  for (const listener of listeners) listener();
}

export const windowController = {
  isOpen: (): boolean => open,
  show(): void {
    if (open) return;
    open = true;
    emit();
  },
  hide(): void {
    if (!open) return;
    open = false;
    emit();
  },
  toggle(): void {
    open = !open;
    emit();
  },
  subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  /** Show the window and hand it a command, now or as soon as it can take it. */
  dispatch(command: WindowCommand): void {
    windowController.show();
    if (handler === null) {
      pending.push(command);
      return;
    }
    handler(command);
  },
  setHandler(next: (command: WindowCommand) => void): () => void {
    handler = next;
    for (const command of pending.splice(0)) next(command);
    return () => {
      if (handler === next) handler = null;
    };
  },

  /** Cheap, synchronous state for palette `isAvailable` checks. */
  hasTabs: (): boolean => tabCount > 0,
  setTabCount(count: number): void {
    tabCount = count;
  },
};

// ------------------------------------------------------------- host context

let context: HostContext = { projectId: null, threadId: null };
const contextListeners = new Set<Listener>();

/**
 * The route the person is on, reported by a tiny app overlay that can read
 * bb's React context — which the window, mounted by a content script, cannot.
 * Stays at nulls on a bb too old to offer the overlay; everything that reads
 * it treats "unknown" as "nowhere in particular".
 */
export const hostContext = {
  get: (): HostContext => context,
  set(next: HostContext): void {
    if (next.projectId === context.projectId && next.threadId === context.threadId) {
      return;
    }
    context = next;
    for (const listener of contextListeners) listener();
  },
  subscribe(listener: Listener): () => void {
    contextListeners.add(listener);
    return () => contextListeners.delete(listener);
  },
};

// ---------------------------------------------------------- composer bridge

/** The slice of bb's composer handle this plugin uses. */
export interface ComposerHandle {
  scope: { kind: string; threadId?: string | null };
  insert(text: string, options?: { at?: "end"; block?: boolean }): void;
  focus(): void;
}

let composers: readonly ComposerHandle[] = [];
const composerListeners = new Set<Listener>();

/**
 * The composers on screen, kept current by a second overlay. Writing terminal
 * output into the thread's composer is what turns "the build failed" into a
 * question for the agent without a copy-paste round trip.
 */
export const composerBridge = {
  available: (): boolean => composers.length > 0,
  set(next: readonly ComposerHandle[]): void {
    if (next === composers) return;
    const wasAvailable = composers.length > 0;
    composers = next;
    if (wasAvailable !== composers.length > 0) {
      for (const listener of composerListeners) listener();
    }
  },
  subscribe(listener: Listener): () => void {
    composerListeners.add(listener);
    return () => composerListeners.delete(listener);
  },
  /**
   * The composer of the thread in view, else any thread's, else the new-thread
   * one. Null when none is on screen.
   */
  pick(threadId: string | null): ComposerHandle | null {
    return (
      composers.find(
        (composer) =>
          composer.scope.kind === "thread" &&
          threadId !== null &&
          composer.scope.threadId === threadId,
      ) ??
      composers.find((composer) => composer.scope.kind === "thread") ??
      composers.find((composer) => composer.scope.kind === "new-thread") ??
      null
    );
  },
};
