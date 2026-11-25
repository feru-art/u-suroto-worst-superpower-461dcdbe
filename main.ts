import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_LINE = "I can make any puddle perfectly round.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY_LINE, { encoding: "utf8" });
