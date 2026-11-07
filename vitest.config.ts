import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// The `@/` alias from tsconfig.json, so tests can import components that use it.
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
});
