// What "Paste into terminal" takes from a message, and what it leaves behind.
import { describe, expect, it } from "vitest";
import { commandFromSelection, extractCommand, quoteForAgent } from "./commands";

describe("extractCommand", () => {
  it("takes the first shell block and ignores code that is not a command", () => {
    const message = [
      "Here is the config:",
      "```ts",
      "export const x = 1;",
      "```",
      "Then run:",
      "```bash",
      "npm install",
      "npm test",
      "```",
    ].join("\n");
    expect(extractCommand(message)).toBe("npm install\nnpm test");
  });

  it("treats an unlabelled fence as a command", () => {
    expect(extractCommand("```\nls -la\n```")).toBe("ls -la");
  });

  it("drops console prompts so they are not typed", () => {
    expect(extractCommand("```console\n$ git status\n$ git diff\n```")).toBe(
      "git status\ngit diff",
    );
  });

  it("keeps a dollar sign that is part of the command", () => {
    expect(extractCommand("```sh\necho $HOME\n```")).toBe("echo $HOME");
  });

  it("never ends with a newline that would press Enter", () => {
    expect(extractCommand("```sh\nrm -rf build\n\n\n```")).toBe("rm -rf build");
  });

  it("returns null when the message holds no command", () => {
    expect(extractCommand("No code here.")).toBeNull();
    expect(extractCommand("```python\nprint(1)\n```")).toBeNull();
  });
});

describe("commandFromSelection", () => {
  it("trims a selection and strips its prompt", () => {
    expect(commandFromSelection("  $ npm run dev\n")).toBe("npm run dev");
  });

  it("is null for whitespace", () => {
    expect(commandFromSelection(" \n ")).toBeNull();
  });
});

describe("quoteForAgent", () => {
  it("fences output for the composer", () => {
    expect(quoteForAgent("error: boom\n")).toBe("```console\nerror: boom\n```");
  });

  it("outgrows a fence inside the output", () => {
    expect(quoteForAgent("```\nx\n```").startsWith("````console\n")).toBe(true);
  });
});
