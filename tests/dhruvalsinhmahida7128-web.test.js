
const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("calculateFootprint returns zero when all inputs are zero", function () {
  assert.strictEqual(calc.calculateFootprint(0, 0, 0), 0);
});

test("calculateFootprint returns a positive value for positive inputs", function () {
  assert.ok(calc.calculateFootprint(100, 100, 100) > 0);
});

