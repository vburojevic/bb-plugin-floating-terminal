// The clipboard writer, through bb.
import { experimental_copyToClipboard } from "@get-bb/plugin-sdk/app";
import { toast } from "sonner";

/**
 * Write the clipboard through bb's own writer: bb Desktop copies through the
 * native clipboard, which works without window focus or a secure origin, both
 * of which `navigator.clipboard` needs.
 */
export function copyText(text: string): void {
  if (text === "") return;
  void experimental_copyToClipboard({ text }).then((ok) => {
    if (!ok) toast.error("Could not copy to the clipboard.");
  });
}
