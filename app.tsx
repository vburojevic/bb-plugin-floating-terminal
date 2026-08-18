// bb-plugin-floating-terminal — frontend entry.
//
// Two registrations: a host-rendered button in the sidebar footer next to
// Settings, and a content script that mounts the window's React root into
// document.body. Both drive the same external controller, so the button works
// no matter which finished mounting first.
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { definePluginApp } from "@bb/plugin-sdk/app";
import { FloatingTerminal } from "@/components/floating-terminal";
import { windowController } from "@/lib/controller";
import "@xterm/xterm/css/xterm.css";
import "./styles.css";

export default definePluginApp((app) => {
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
});
