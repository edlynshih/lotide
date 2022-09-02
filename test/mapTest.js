const map = require('../map');
const assert = require('chai').assert;

const array1 = [1, 4, 9, 16];
const map1 = map(array1, x => x * 2);

const words = ["ground", "control", "to", "major"];
const map2 = map(words, word => word[0])

describe("#map", () => {
  it("returns every element multiplied by 2", () => {
    assert.deepEqual(map1, [2, 8, 18, 32]);
  });

  it("returns the first character of each word", () => {
    assert.deepEqual(map2, ['g', 'c', 't', 'm']);
  });
});