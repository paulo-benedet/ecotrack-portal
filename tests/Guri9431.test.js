
const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("S4 - Validate calculator inputs", function () {
  assert.strictEqual(calc.isValidInput(-5), false);
  assert.strictEqual(calc.isValidInput("abc"), false);
  assert.strictEqual(calc.isValidInput(10), true);
});
