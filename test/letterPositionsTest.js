const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns the index of e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns indices of the given element if occurs multiple times", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("returns the index of o", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });

  it("returns an object with the key as letter and value as an array of indices", () => {
    assert.deepEqual(letterPositions('lighthouse in the house'), {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    });
  });
});