const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);





const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🚨🚨🚨 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};




const array1 = [1, 4, 9, 16];
const map1 = map(array1, x => x * 2);

const words2 = ["ground", "control", "to", "major"];
const map2 = map(words2, word => word[0])


assertArraysEqual(map1, [2, 8, 18, 32]);
assertArraysEqual(map1, ['2', 8, 18, 32]);

assertArraysEqual(map2, ['g', 'c', 't', 'm']);
assertArraysEqual(map2, [1, 'c', 't', 'm']);


