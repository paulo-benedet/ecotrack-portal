const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("treesToOffset converts 42 trees into 2 tonnes", function () {
  assert.strictEqual(calc.treesToOffset(42), 2);
});

test("formatKg formats carbon savings to one decimal place", function () {
  assert.strictEqual(calc.formatKg(12.34), "12.3 kg CO2e");
});