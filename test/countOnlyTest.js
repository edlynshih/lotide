const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns count if true", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true}), { Jason: 1 });
  });

  it("returns undefined if false", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": false}), undefined);
  });
});