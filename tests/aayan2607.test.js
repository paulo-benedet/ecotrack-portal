const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("footprintRating returns Low just below 100", function () {
  assert.strictEqual(calc.footprintRating(99), "Low");
});

test("footprintRating returns Medium at the 100 boundary", function () {
  assert.strictEqual(calc.footprintRating(100), "Medium");
});

test("footprintRating returns High at the 300 boundary", function () {
  assert.strictEqual(calc.footprintRating(300), "High");
});
