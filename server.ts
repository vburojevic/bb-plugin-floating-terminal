// bb-plugin-floating-terminal — backend.
//
// A tab manager in front of `bb.sdk.terminals`. The floating window's
// navigation is a tab strip; each tab maps to one real PTY session on some
// host. The open-tab list and the active tab are kv-persisted, so closing the
// window, reloading the app, or restarting bb reattaches every surviving shell
// instead of losing them.
//
// Two rules make the client/server dance safe, and both matter much more on a
// remote host where a round trip is ~100ms rather than ~2ms:
//
//  1. Every mutation runs inside `serialize`. Each one is a read-modify-write
//     over a single kv array with awaits in the middle (listScopes, close,
//     create), so overlapping calls would otherwise read the same snapshot and
//     the last writer would silently drop the other's session — leaking a live
//     PTY that no longer appears in any list.
//  2. Every response that carries tab state carries a monotonic `revision`.
//     The client applies a snapshot only if it is newer than the last one it
//     applied, so a slow `init` can never resurrect a closed tab or drop a
//     freshly opened one just because it started earlier.
import { defineRpcContract, type BbPluginApi } from "@bb/plugin-sdk";
import { meaningfulShellTitle } from "./lib/terminal-io";
import { z } from "zod";

/** Cap on the scrollback replayed when the window (re)attaches to a session. */
const REPLAY_TAIL_BYTES = 256_000;

const scopeSchema = z.object({
  /** Stable id: `home:<hostId>` or `project:<projectId>`. */
  key: z.string(),
  label: z.string(),
  /** Absolute path, or "~" for the host's home directory. */
  detail: z.string(),
  hostId: z.string(),
  hostName: z.string(),
  /** Null means "start in the host's home directory". */
  cwd: z.string().nullable(),
  online: z.boolean(),
  kind: z.enum(["project", "home"]),
});

const tabSchema = z.object({
  terminalId: z.string(),
  scopeKey: z.string(),
  label: z.string(),
  hostName: z.string(),
  cwd: z.string(),
  status: z.string(),
  exitCode: z.number().int().nullable(),
  /**
   * A title the shell set over OSC, or null while the session still wears the
   * one `createSession` stamped. Lives on the bb session rather than in plugin
   * storage, so `bb terminal list` and bb's own UI show the same name.
   */
  shellTitle: z.string().nullable(),
});

/** The authoritative tab state, versioned so stale replies can be discarded. */
const snapshotSchema = z.object({
  revision: z.number().int(),
  tabs: z.array(tabSchema),
  activeTabId: z.string().nullable(),
});

const geometrySchema = z.object({
  cols: z.number().int().min(1).max(2000),
  rows: z.number().int().min(1).max(2000),
});

export const rpcContract = defineRpcContract({
  /** Everything the window needs on open: directories, surviving tabs, prefs. */
  init: {
    input: z.null(),
    output: z.object({
      snapshot: snapshotSchema,
      scopes: z.array(scopeSchema),
      /** Scope keys, most recently opened first. Drives the suggestion order. */
      recentScopeKeys: z.array(z.string()),
      prefs: z.object({
        fontSize: z.number().int(),
        shortcutEnabled: z.boolean(),
      }),
    }),
  },
  openTab: {
    input: z.object({ scopeKey: z.string() }).extend(geometrySchema.shape).strict(),
    output: z.object({ snapshot: snapshotSchema, opened: tabSchema }),
  },
  closeTab: {
    input: z.object({ terminalId: z.string() }).strict(),
    output: z.object({ snapshot: snapshotSchema }),
  },
  setActiveTab: {
    input: z.object({ terminalId: z.string() }).strict(),
    output: z.object({ ok: z.boolean() }),
  },
  /** Adopt an OSC title the shell set. Null restores the default name. */
  renameTab: {
    input: z
      .object({ terminalId: z.string(), title: z.string().nullable() })
      .strict(),
    output: z.object({ snapshot: snapshotSchema }),
  },
  /** Kill this tab's shell and start a fresh one in the same directory. */
  restartTab: {
    input: z
      .object({ terminalId: z.string() })
      .extend(geometrySchema.shape)
      .strict(),
    output: z.object({ snapshot: snapshotSchema, restarted: tabSchema }),
  },
  /**
   * Pull output written after `sinceSeq`. Session status is resolved only on an
   * idle read: while bytes are flowing the shell is alive by definition, and
   * this keeps the hot polling path to a single call.
   */
  read: {
    input: z
      .object({
        terminalId: z.string(),
        sinceSeq: z.number().int().min(0),
        replay: z.boolean().optional(),
      })
      .strict(),
    output: z.object({
      chunks: z.array(
        z.object({ seq: z.number().int(), dataBase64: z.string() }),
      ),
      nextSeq: z.number().int(),
      /** True when the ring buffer dropped bytes before `sinceSeq`. */
      truncated: z.boolean(),
      /** Present on idle reads and when the session is gone. */
      status: z.string().nullable(),
      exitCode: z.number().int().nullable(),
    }),
  },
  write: {
    input: z.object({ terminalId: z.string(), dataBase64: z.string() }).strict(),
    output: z.object({ ok: z.boolean() }),
  },
  resize: {
    input: z
      .object({ terminalId: z.string() })
      .extend(geometrySchema.shape)
      .strict(),
    output: z.object({ ok: z.boolean() }),
  },
});

type Scope = z.infer<typeof scopeSchema>;
type Tab = z.infer<typeof tabSchema>;
type Snapshot = z.infer<typeof snapshotSchema>;

interface StoredTab {
  terminalId: string;
  scopeKey: string;
}

/**
 * Hard ceiling on any single SDK round trip made from an RPC handler. Plugins
 * run in-process: a hung call to a flaky remote host used to hold a handler
 * (and the serialize queue behind it) for 7+ seconds. On timeout we answer
 * from cached state instead of waiting.
 */
const SDK_TIMEOUT_MS = 1500;
/** Session creation legitimately takes longer on a remote host. */
const CREATE_TIMEOUT_MS = 5000;
/** How long a scopes listing may be served from cache. */
const SCOPES_TTL_MS = 3000;

class SdkTimeoutError extends Error {
  constructor(label: string, ms: number) {
    super(`${label} timed out after ${ms}ms`);
    this.name = "SdkTimeoutError";
  }
}

function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  label: string,
): Promise<T> {
  // The underlying call keeps running; make sure its eventual rejection is
  // never an unhandled one.
  promise.catch(() => {});
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new SdkTimeoutError(label, ms)),
      ms,
    );
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

const TABS_KEY = "open-tabs";
const RECENT_KEY = "recent-scopes";
/** Enough to be useful as suggestions without becoming a second history UI. */
const RECENT_LIMIT = 6;
const ACTIVE_TAB_KEY = "active-tab";
const REVISION_KEY = "revision";

function isLiveStatus(status: string): boolean {
  return status === "running" || status === "starting";
}

export default async function plugin(bb: BbPluginApi) {
  const settings = bb.settings.define({
    fontSize: {
      type: "select",
      label: "Font size",
      options: ["11", "12", "13", "14", "16", "18"],
      default: "13",
    },
    shortcutEnabled: {
      type: "boolean",
      label: "Toggle with Ctrl+`",
      default: true,
    },
  });

  // Serializes every read-modify-write of the tab list. Plugin handlers share
  // one Node process, so a promise chain is a sufficient mutex.
  let mutations: Promise<unknown> = Promise.resolve();
  function serialize<T>(work: () => Promise<T>): Promise<T> {
    const result = mutations.then(work, work);
    // Swallow rejections on the chain itself, or one failed mutation would
    // reject every subsequent one.
    mutations = result.then(
      () => undefined,
      () => undefined,
    );
    return result;
  }

  /**
   * Every directory a tab can open in: each project's default checkout, plus
   * one home entry per machine. Labels stay short — the picker and the tab
   * strip both group or qualify by machine themselves.
   */
  let scopesCache: { at: number; scopes: Scope[] } | null = null;

  async function listScopes(): Promise<Scope[]> {
    if (scopesCache !== null && Date.now() - scopesCache.at < SCOPES_TTL_MS) {
      return scopesCache.scopes;
    }
    let hosts, projects;
    try {
      [hosts, projects] = await Promise.all([
        withTimeout(bb.sdk.hosts.list(), SDK_TIMEOUT_MS, "hosts.list"),
        withTimeout(bb.sdk.projects.list(), SDK_TIMEOUT_MS, "projects.list"),
      ]);
    } catch (error) {
      // Serve stale scopes rather than block the handler behind a slow call.
      if (scopesCache !== null) return scopesCache.scopes;
      throw error;
    }
    const hostsById = new Map(hosts.map((host) => [host.id, host]));
    const scopes: Scope[] = [];

    for (const project of projects) {
      const source =
        project.sources.find((entry) => entry.isDefault) ?? project.sources[0];
      if (source === undefined) continue;
      const host = hostsById.get(source.hostId);
      scopes.push({
        key: `project:${project.id}`,
        label: project.name,
        detail: source.path,
        hostId: source.hostId,
        hostName: host?.name ?? source.hostId,
        cwd: source.path,
        online: host?.status === "connected",
        kind: "project",
      });
    }

    for (const host of hosts) {
      scopes.push({
        key: `home:${host.id}`,
        label: "Home",
        detail: "~",
        hostId: host.id,
        hostName: host.name,
        cwd: null,
        online: host.status === "connected",
        kind: "home",
      });
    }

    scopesCache = { at: Date.now(), scopes };
    return scopes;
  }

  async function readStoredTabs(): Promise<StoredTab[]> {
    return (await bb.storage.kv.get<StoredTab[]>(TABS_KEY)) ?? [];
  }

  async function readRecent(): Promise<string[]> {
    return (await bb.storage.kv.get<string[]>(RECENT_KEY)) ?? [];
  }

  /** Most recent first, no duplicates. */
  async function rememberRecent(scopeKey: string): Promise<void> {
    const next = [scopeKey, ...(await readRecent()).filter((k) => k !== scopeKey)];
    await bb.storage.kv.set(RECENT_KEY, next.slice(0, RECENT_LIMIT));
  }

  async function bumpRevision(): Promise<number> {
    const next = ((await bb.storage.kv.get<number>(REVISION_KEY)) ?? 0) + 1;
    await bb.storage.kv.set(REVISION_KEY, next);
    return next;
  }

  /** Fallback naming for a tab whose scope has since disappeared. */
  function labelFromCwd(cwd: string): string {
    const segments = cwd.split("/").filter((part) => part !== "");
    return segments[segments.length - 1] ?? cwd;
  }

  /**
   * The name `createSession` stamps on a new session. A session still wearing
   * it has no shell title of its own, which is how the tab strip knows to keep
   * showing the directory instead.
   */
  function defaultTitle(label: string, hostName: string): string {
    return hostName === "" ? label : `${label} \u00b7 ${hostName}`;
  }

  /** Last tab state we successfully resolved, per terminal id. */
  const lastKnownTabs = new Map<string, Tab>();

  /**
   * Build the authoritative snapshot, dropping tabs whose session no longer
   * exists. Always call inside `serialize` — it writes back the pruned list.
   */
  async function snapshot(): Promise<Snapshot> {
    const [stored, scopes, storedActive] = await Promise.all([
      readStoredTabs(),
      listScopes(),
      bb.storage.kv.get<string>(ACTIVE_TAB_KEY),
    ]);

    let sawTimeout = false;
    // One parallel, timeout-guarded round instead of a sequential get per tab:
    // the old loop held the handler for (tab count × round trip) — seconds
    // against a slow remote host — and everything queued behind it.
    const resolved = await Promise.all(
      stored.map(async (entry) => {
        try {
          const session = await withTimeout(
            bb.sdk.terminals.get({ terminalId: entry.terminalId }),
            SDK_TIMEOUT_MS,
            "terminals.get",
          );
          if (!isLiveStatus(session.status)) return null;
          const scope =
            scopes.find((item) => item.key === entry.scopeKey) ?? null;
          const label = scope?.label ?? labelFromCwd(session.initialCwd);
          const hostName = scope?.hostName ?? "";
          const tab: Tab = {
            terminalId: session.id,
            scopeKey: entry.scopeKey,
            label,
            hostName,
            cwd: session.initialCwd,
            status: session.status,
            exitCode: session.exitCode,
            shellTitle: meaningfulShellTitle(session.title, {
              label,
              defaultTitle: defaultTitle(label, hostName),
              cwd: session.initialCwd,
            }),
          };
          lastKnownTabs.set(tab.terminalId, tab);
          return tab;
        } catch (error) {
          if (error instanceof SdkTimeoutError) {
            // Slow, not gone: keep the tab on its last known state rather
            // than pruning a live session just because the host is laggy.
            sawTimeout = true;
            return lastKnownTabs.get(entry.terminalId) ?? null;
          }
          // Session is gone entirely; drop the tab.
          lastKnownTabs.delete(entry.terminalId);
          return null;
        }
      }),
    );
    const tabs: Tab[] = resolved.filter((tab): tab is Tab => tab !== null);

    let revision = (await bb.storage.kv.get<number>(REVISION_KEY)) ?? 0;
    if (tabs.length !== stored.length && !sawTimeout) {
      // Pruning is itself a change, so it earns a new revision.
      await bb.storage.kv.set(
        TABS_KEY,
        tabs.map(({ terminalId, scopeKey }) => ({ terminalId, scopeKey })),
      );
      revision = await bumpRevision();
    }

    const activeTabId =
      tabs.find((tab) => tab.terminalId === storedActive)?.terminalId ??
      tabs[0]?.terminalId ??
      null;

    return { revision, tabs, activeTabId };
  }

  async function requireScope(scopeKey: string): Promise<Scope> {
    const scope = (await listScopes()).find((entry) => entry.key === scopeKey);
    if (scope === undefined) {
      throw new Error("That directory is no longer available.");
    }
    if (!scope.online) {
      throw new Error(`${scope.hostName} is disconnected.`);
    }
    return scope;
  }

  async function createSession(
    scope: Scope,
    cols: number,
    rows: number,
  ): Promise<Tab> {
    const created = await withTimeout(
      bb.sdk.terminals.create({
        cols,
        rows,
        scope: { kind: "host_path", hostId: scope.hostId, cwd: scope.cwd },
        // `bb terminal list` has no grouping to lean on, so name the machine here.
        title: defaultTitle(scope.label, scope.hostName),
      }),
      CREATE_TIMEOUT_MS,
      "terminals.create",
    );
    bb.log.info(`opened ${created.id} in ${created.initialCwd}`);
    return {
      terminalId: created.id,
      scopeKey: scope.key,
      label: scope.label,
      hostName: scope.hostName,
      cwd: created.initialCwd,
      status: created.status,
      exitCode: created.exitCode,
      shellTitle: null,
    };
  }

  bb.rpc.register(rpcContract, {
    async init() {
      const [snap, scopes, recentScopeKeys, values] = await Promise.all([
        serialize(snapshot),
        listScopes(),
        readRecent(),
        settings.get(),
      ]);
      const parsedFontSize = Number.parseInt(values.fontSize, 10);
      return {
        snapshot: snap,
        scopes,
        recentScopeKeys,
        prefs: {
          fontSize: Number.isFinite(parsedFontSize) ? parsedFontSize : 13,
          shortcutEnabled: values.shortcutEnabled,
        },
      };
    },

    openTab({ scopeKey, cols, rows }) {
      return serialize(async () => {
        const scope = await requireScope(scopeKey);
        const opened = await createSession(scope, cols, rows);
        const stored = await readStoredTabs();
        stored.push({ terminalId: opened.terminalId, scopeKey: opened.scopeKey });
        await bb.storage.kv.set(TABS_KEY, stored);
        await bb.storage.kv.set(ACTIVE_TAB_KEY, opened.terminalId);
        await rememberRecent(opened.scopeKey);
        await bumpRevision();
        return { snapshot: await snapshot(), opened };
      });
    },

    closeTab({ terminalId }) {
      return serialize(async () => {
        try {
          await withTimeout(
            bb.sdk.terminals.close({ terminalId, mode: "force" }),
            SDK_TIMEOUT_MS,
            "terminals.close",
          );
        } catch {
          // Already gone (or the host is slow to confirm); removing the tab
          // is still the right outcome.
        }
        const remaining = (await readStoredTabs()).filter(
          (entry) => entry.terminalId !== terminalId,
        );
        await bb.storage.kv.set(TABS_KEY, remaining);

        const storedActive = await bb.storage.kv.get<string>(ACTIVE_TAB_KEY);
        if (storedActive === terminalId) {
          const next = remaining[remaining.length - 1]?.terminalId;
          if (next === undefined) await bb.storage.kv.delete(ACTIVE_TAB_KEY);
          else await bb.storage.kv.set(ACTIVE_TAB_KEY, next);
        }
        await bumpRevision();
        return { snapshot: await snapshot() };
      });
    },

    async setActiveTab({ terminalId }) {
      await bb.storage.kv.set(ACTIVE_TAB_KEY, terminalId);
      return { ok: true };
    },

    renameTab({ terminalId, title }) {
      return serialize(async () => {
        const stored = await readStoredTabs();
        const entry = stored.find((tab) => tab.terminalId === terminalId);
        // Renaming a tab this window does not own would let a stale client
        // rename somebody else's session out from under them.
        if (entry === undefined) return { snapshot: await snapshot() };

        // Null means "go back to the name the tab was opened with", which is
        // what the tab strip falls back to showing.
        const scope = (await listScopes()).find(
          (item) => item.key === entry.scopeKey,
        );
        const restored =
          scope === undefined
            ? null
            : defaultTitle(scope.label, scope.hostName);
        const next = title ?? restored;
        if (next === null) return { snapshot: await snapshot() };

        try {
          await withTimeout(
            bb.sdk.terminals.rename({ terminalId, title: next }),
            SDK_TIMEOUT_MS,
            "terminals.rename",
          );
        } catch {
          // A name is not worth failing a turn over; the next snapshot still
          // carries whatever the session actually holds.
          return { snapshot: await snapshot() };
        }
        await bumpRevision();
        return { snapshot: await snapshot() };
      });
    },

    restartTab({ terminalId, cols, rows }) {
      return serialize(async () => {
        const stored = await readStoredTabs();
        const index = stored.findIndex(
          (entry) => entry.terminalId === terminalId,
        );
        if (index === -1) throw new Error("That tab is no longer open.");

        const scope = await requireScope(stored[index]!.scopeKey);
        try {
          await withTimeout(
            bb.sdk.terminals.close({ terminalId, mode: "force" }),
            SDK_TIMEOUT_MS,
            "terminals.close",
          );
        } catch {
          // Already dead — that is why we are restarting.
        }

        const restarted = await createSession(scope, cols, rows);
        // Replace in place so the tab keeps its position in the strip.
        stored[index] = {
          terminalId: restarted.terminalId,
          scopeKey: restarted.scopeKey,
        };
        await bb.storage.kv.set(TABS_KEY, stored);
        const storedActive = await bb.storage.kv.get<string>(ACTIVE_TAB_KEY);
        if (storedActive === terminalId) {
          await bb.storage.kv.set(ACTIVE_TAB_KEY, restarted.terminalId);
        }
        await bumpRevision();
        return { snapshot: await snapshot(), restarted };
      });
    },

    async read({ terminalId, sinceSeq, replay }) {
      try {
        const output = await withTimeout(
          bb.sdk.terminals.output({
            terminalId,
            sinceSeq,
            ...(replay === true ? { tailBytes: REPLAY_TAIL_BYTES } : {}),
          }),
          SDK_TIMEOUT_MS,
          "terminals.output",
        );
        if (output.chunks.length > 0) {
          return { ...output, status: null, exitCode: null };
        }
        const session = await withTimeout(
          bb.sdk.terminals.get({ terminalId }),
          SDK_TIMEOUT_MS,
          "terminals.get",
        );
        return {
          ...output,
          status: session.status,
          exitCode: session.exitCode,
        };
      } catch (error) {
        if (error instanceof SdkTimeoutError) {
          // Slow host, not a dead session. Report no progress; the client
          // polls again rather than treating the tab as gone.
          return {
            chunks: [],
            nextSeq: sinceSeq,
            truncated: false,
            status: null,
            exitCode: null,
          };
        }
        // The session was closed out from under us. Report it instead of
        // throwing so the window can offer a restart.
        return {
          chunks: [],
          nextSeq: sinceSeq,
          truncated: false,
          status: "gone",
          exitCode: null,
        };
      }
    },

    async write({ terminalId, dataBase64 }) {
      await withTimeout(
        bb.sdk.terminals.input({ terminalId, dataBase64 }),
        SDK_TIMEOUT_MS,
        "terminals.input",
      );
      return { ok: true };
    },

    async resize({ terminalId, cols, rows }) {
      await withTimeout(
        bb.sdk.terminals.resize({ terminalId, cols, rows }),
        SDK_TIMEOUT_MS,
        "terminals.resize",
      );
      return { ok: true };
    },
  });
}
