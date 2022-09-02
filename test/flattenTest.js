const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns flattened array when given nested arrays", () => {
    assert.deepEqual(flatten([[1, 2], [3, 4], 5, [6], 7]), [1, 2, 3, 4, 5, 6, 7]);
  });

  it("returns flattened array when given nested arrays", () => {
    assert.deepEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns flattened array when given an array", () => {
    assert.deepEqual(flatten([1]), [1]);
  });

  it("returns flattened array when given a nested array containing one element", () => {
    assert.deepEqual(flatten([[1]]), [1]);
  });
});