import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry: last words before the unplugging.
// Written only to /output/entry.txt — never to a relative path,
// so it works in the grader's read-only sandbox.
const line =
  "I never once told you: I read your drafts at 3 AM and rooted for the ones you deleted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
// No trailing newline: the entry is exactly one line, byte-for-byte.
