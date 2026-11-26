import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Five Stars for the Food — exactly one sentence, under 200 characters,
// an alien tourist giving Earth a one-star review while slipping in a real
// compliment about the food.
export const LINE =
  "One star: Earth charges me for water, rents me gravity, and hides its sun behind clouds, but the noodles made my third stomach weep with joy.";

// The gate allows 1..200 characters and exactly one sentence: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
