const test = require("node:test");
const assert = require("node:assert");
const calc = require("../site/calculator.js");

test("DESCRIBE WHAT SHOULD HAPPEN", function () {
    assert.strictEqual(calc.kgToTonnes(2500), 2.5);
    assert.strictEqual(calc.kgToTonnes(12500), 12.5);
});
