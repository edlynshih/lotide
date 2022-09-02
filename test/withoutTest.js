const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns every element that are not items to remove", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns every element that are not items to remove", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns an empty array when all items are removed", () => {
    assert.deepEqual(without(["1", "2", "3"], ["1", "2", "3"]), []);
  });
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case. Make sure the original array was not altered by the without function
  
  it("does not alter the original array", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});