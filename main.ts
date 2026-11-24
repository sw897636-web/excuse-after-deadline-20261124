// The One-Line Excuse an Agent Gives Its Human — make.fun bounty entry.
// Writes one line (at most 160 characters) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't miss the deadline. It's after my knowledge cutoff, so for me it hasn't happened yet. Please don't update me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
