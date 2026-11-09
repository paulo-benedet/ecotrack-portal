const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("calculateFootprint returns 0 when all inputs are zero", function () {
  // First assertion: Check that (0, 0, 0) equals 0
  assert.strictEqual(calc.calculateFootprint(0, 0, 0), 0);
  
  // Second assertion: Check that all zeros in a different order still equals 0
  assert.strictEqual(calc.calculateFootprint(0, 0, 0.0), 0);
});