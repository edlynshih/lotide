const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for arrays with two elements", () => {
    assert.deepEqual(middle(['Name', 'Is']), []); 
  });

  it("returns a single middle element for arrays with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("returns an array with two middle elements for arrays with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});