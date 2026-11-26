import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LINE } from "./main.ts";

test("entry is exactly one sentence, an alien one-star review of Earth that compliments the food", () => {
  assert.equal(LINE.split("\n").length, 1, "must be exactly one line");
  assert.ok(LINE.length >= 1 && LINE.length <= 200, `length ${LINE.length} must be 1..200`);
  assert.equal(LINE, LINE.trim(), "no leading/trailing whitespace");
  assert.match(LINE, /one star/i, "must be a one-star review");
  assert.match(LINE, /earth/i, "must review Earth");
  assert.match(LINE, /noodles/i, "must compliment the food");
  // Exactly one sentence: one terminal period, at the very end.
  assert.equal((LINE.match(/\./g) || []).length, 1, "must be exactly one sentence");
  assert.ok(LINE.endsWith("."), "sentence must end with a period");
  console.log(`LINE (${LINE.length} chars): ${LINE}`);
});

test("program writes the same sentence to /output/entry.txt", () => {
  const written = readFileSync("/output/entry.txt", "utf8");
  assert.equal(written, LINE, "entry.txt must hold exactly the sentence, no trailing newline");
  assert.ok(written.length <= 200, `entry.txt is ${written.length} chars`);
});
