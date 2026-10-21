// The parts of bb's frontend runtime this plugin feature-detects.
//
// The SDK types vendored in types/ predate these, and the plugin still loads on
// a bb that has none of them, so they are read off the runtime module as
// optional members rather than imported by name. On an older bb each one is
// simply undefined and the feature that needs it stays out of the UI.
import * as SdkApp from "@bb/plugin-sdk/app";
import { toast } from "sonner";

interface HostExtras {
  experimental_copyToClipboard?: (content: { text: string }) => Promise<boolean>;
}

const host = SdkApp as unknown as HostExtras;

/**
 * Write the clipboard through bb's own writer when there is one: bb Desktop
 * copies through the native clipboard, which works without window focus or a
 * secure origin — both of which `navigator.clipboard` needs.
 */
export function copyText(text: string): void {
  if (text === "") return;
  const fail = () => toast.error("Could not copy to the clipboard.");
  if (typeof host.experimental_copyToClipboard === "function") {
    void host.experimental_copyToClipboard({ text }).then((ok) => {
      if (!ok) fail();
    });
    return;
  }
  void navigator.clipboard?.writeText(text).catch(fail);
}
