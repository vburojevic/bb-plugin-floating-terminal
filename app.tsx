// bb-plugin-floating-terminal — frontend entry.
//
// The window itself is a content script that mounts its React root into
// document.body, outside bb's component tree. Around it:
//
// - a host-rendered button in the sidebar footer next to Settings;
// - two invisible app overlays that *can* read bb's React context, and report
//   what the window cannot see on its own: which thread is in view (so "a
//   shell here" means its worktree) and which composers are on screen (so
//   terminal output can be handed to the agent);
// - palette commands, listed under Plugins and rebindable in Settings →
//   Keyboard;
// - "Paste into terminal" on chat messages and selections.
//
// Everything newer than the vendored SDK types is feature-detected, so the
// plugin still loads on an older bb with those parts simply absent. All of it
// drives the same external controller, so nothing depends on mount order.
import { createElement, useEffect, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import * as SdkApp from "@bb/plugin-sdk/app";
import { definePluginApp, useBbContext } from "@bb/plugin-sdk/app";
import { toast } from "sonner";
import { FloatingTerminal } from "@/components/floating-terminal";
import { commandFromSelection, extractCommand } from "@/lib/commands";
import {
  composerBridge,
  hostContext,
  windowController,
  type ComposerHandle,
  type HostContext,
} from "@/lib/controller";
import "@xterm/xterm/css/xterm.css";
import "./styles.css";

interface CommandContext {
  threadId: string | null;
  projectId: string | null;
}

interface CommandRegistration {
  id: string;
  title: string;
  isAvailable?: (context: CommandContext) => boolean;
  run: (context: CommandContext) => void;
}

/** What this plugin uses of the app API beyond the vendored declarations. */
interface AppExtras {
  commands?: { register(registration: CommandRegistration): void };
  slots: {
    experimental_appOverlay?: (registration: {
      id: string;
      component: ComponentType;
    }) => void;
  };
}

const useComposers = (SdkApp as unknown as {
  useComposers?: () => readonly ComposerHandle[];
}).useComposers;

/** Reports the route, so "here" can mean the thread's own worktree. */
function ContextBridge() {
  const context = useBbContext() as Partial<HostContext> | undefined;
  const projectId = context?.projectId ?? null;
  const threadId = context?.threadId ?? null;
  useEffect(() => {
    hostContext.set({ projectId, threadId });
  }, [projectId, threadId]);
  return null;
}

/** Reports the composers on screen, so output can be handed to the agent. */
function ComposerBridge() {
  const composers = useComposers!();
  useEffect(() => {
    composerBridge.set(composers);
  }, [composers]);
  useEffect(() => () => composerBridge.set([]), []);
  return null;
}

function contextOf(command: CommandContext): HostContext {
  return { projectId: command.projectId ?? null, threadId: command.threadId ?? null };
}

export default definePluginApp((app) => {
  const extras = app as unknown as AppExtras;

  app.contentScripts.register({
    id: "floating-window",
    mount({ signal }) {
      const container = document.createElement("div");
      document.body.append(container);
      const root = createRoot(container);
      root.render(createElement(FloatingTerminal));

      signal.addEventListener(
        "abort",
        () => {
          // Unmount off the current task: React refuses to unmount a root
          // while it is rendering, which is exactly when a reload can land.
          queueMicrotask(() => root.unmount());
          container.remove();
        },
        { once: true },
      );
    },
  });

  app.slots.sidebarFooterAction({
    id: "toggle",
    title: "Terminal (Ctrl+`)",
    icon: "Terminal",
    run() {
      windowController.toggle();
    },
  });

  // Separate overlays, so a host change that breaks one hook cannot take the
  // other down with it: bb contains a crash to the overlay that threw.
  extras.slots.experimental_appOverlay?.({ id: "context", component: ContextBridge });
  if (typeof useComposers === "function") {
    extras.slots.experimental_appOverlay?.({ id: "composers", component: ComposerBridge });
  }

  const commands: CommandRegistration[] = [
    {
      id: "toggle",
      title: "Floating Terminal: Show or hide",
      run: () => windowController.toggle(),
    },
    {
      id: "new-here",
      title: "Floating Terminal: New shell here (this thread's worktree)",
      run: (context) =>
        windowController.dispatch({ kind: "new-here", context: contextOf(context) }),
    },
    {
      id: "new",
      title: "Floating Terminal: New shell in…",
      run: () => windowController.dispatch({ kind: "pick" }),
    },
    {
      id: "find",
      title: "Floating Terminal: Find in scrollback",
      isAvailable: () => windowController.hasTabs(),
      run: () => windowController.dispatch({ kind: "find" }),
    },
    {
      id: "clear",
      title: "Floating Terminal: Clear scrollback",
      isAvailable: () => windowController.hasTabs(),
      run: () => windowController.dispatch({ kind: "clear" }),
    },
    {
      id: "restart",
      title: "Floating Terminal: Restart shell",
      isAvailable: () => windowController.hasTabs(),
      run: () => windowController.dispatch({ kind: "restart" }),
    },
  ];
  for (const command of commands) extras.commands?.register(command);

  // The command lands at the prompt and waits for Enter: an agent's
  // suggestion is something to read before it runs, not to run for you.
  if (typeof app.slots.messageAction !== "function") return;
  app.slots.messageAction({
    id: "paste-into-terminal",
    title: "Paste into terminal",
    icon: "Terminal",
    run({ threadId, message, selectedText }) {
      const text =
        selectedText !== undefined
          ? commandFromSelection(selectedText)
          : extractCommand(message.text);
      if (text === null) {
        toast("No command to paste", {
          description: "Select one, or use this on a message with a shell code block.",
        });
        return;
      }
      windowController.dispatch({
        kind: "paste",
        text,
        context: { threadId, projectId: hostContext.get().projectId },
      });
    },
  });
});
