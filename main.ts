import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_TEXT = "I can make any puddle perfectly round.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY_TEXT, { encoding: "utf8" });
