
const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("calculateFootprint adds up all three sources", function () {
  // 100 kWh x 0.21 + 100 km x 0.17 + 100 km x 0.10 = 48
  assert.strictEqual(calc.calculateFootprint(100, 100, 100), 48);
});
