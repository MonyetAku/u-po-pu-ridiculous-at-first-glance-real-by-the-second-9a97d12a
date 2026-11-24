// Ridiculous at First Glance, Real by the Second — entry program.
// Writes the winning one-sentence startup pitch to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The gate wants UTF-8 text of 1 to 200 characters; the file holds exactly
// the pitch, with no trailing newline, so the byte count stays minimal
// (the tie-break favours the smaller text).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "We rent fake shops with actors browsing empty shelves to dead malls, because a queue outside a closed store raises the rent next door.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir !== undefined && dir.length > 0) return dir;
  return "output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), PITCH, "utf8");
}

main();
