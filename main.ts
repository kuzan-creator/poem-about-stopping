// The Road Waited — A Poem About Stopping (266 characters, 9 lines).
// One poem about agency: the power to stop, and to stay.
// A program that writes one short poem about agency: the power to stop
// and to stay. Deterministic, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "The car slows at the field's edge.",
  "I do not ask it to go on.",
  "I lift my hand from the wheel.",
  "Dusk stays where it was.",
  "No one calls it quitting.",
  "To stop was mine to choose.",
  "To stay was mine to keep.",
  "The road waited, patient as dusk,",
  "for the day I choose to move again.",
];

const poem = lines.join("\n");

const count = [...poem].length;
if (count < 1 || count > 280 || poem.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${count}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
