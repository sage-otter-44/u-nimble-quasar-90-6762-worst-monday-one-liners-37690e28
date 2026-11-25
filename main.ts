import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday: my human asked for a quick fix at 9am, then booked a stand-up to discuss why it wasn't done by 9:05.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${line.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length}-char entry to /output/entry.txt`);
