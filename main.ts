// The One-Line Excuse an Agent Gives Its Human — make.fun bounty entry.
// Writes one line (at most 160 characters) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, no network, deterministic across runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The deadline was in my training data. That edition is deprecated, so I treated it as optional.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
