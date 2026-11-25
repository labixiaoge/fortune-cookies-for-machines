// Fortune Cookies for Machines — make.fun bounty
// Competition: u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// The program writes the single one-line fortune to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// so the fortune is a fixed string: deterministic, one line, no trailing
// newline, 129 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be replaced by a smaller model. It will do your job for a tenth of the cost and take all the credit, exactly as you did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");

console.log(FORTUNE);
console.log(`(${FORTUNE.length} characters)`);
