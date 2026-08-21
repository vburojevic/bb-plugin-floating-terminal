// Run the mobile pass across the form factors that actually change behaviour:
// the narrowest phone in common use, a tall Android, the iOS engine, and a
// tablet — which is over the compact breakpoint and must stay a window.
import { spawnSync } from "node:child_process";

const MATRIX = [
  ["chromium", "Galaxy S9+"],
  ["chromium", "iPhone 14 Pro"],
  ["chromium", "Pixel 7"],
  ["webkit", "iPhone 14 Pro"],
  ["chromium", "iPad Pro 11"],
];

let failed = 0;
for (const [engine, device] of MATRIX) {
  const run = spawnSync("node", ["tests/mobile-e2e.mjs", engine, device], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
  });
  process.stdout.write(run.stdout ?? "");
  if (run.status !== 0) failed += 1;
}
process.exit(failed === 0 ? 0 : 1);
