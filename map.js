const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;


//const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const array1 = [1, 4, 9, 16];
// const map1 = map(array1, x => x * 2);

// const words2 = ["ground", "control", "to", "major"];
// const map2 = map(words2, word => word[0])


// assertArraysEqual(map1, [2, 8, 18, 32]);
// assertArraysEqual(map1, ['2', 8, 18, 32]);

// assertArraysEqual(map2, ['g', 'c', 't', 'm']);
// assertArraysEqual(map2, [1, 'c', 't', 'm']);

