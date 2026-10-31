const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("footprintRating returns Low for low values", function () {
  assert.strictEqual(calc.footprintRating(50), "Low");
  assert.strictEqual(calc.footprintRating(75), "Low");
});