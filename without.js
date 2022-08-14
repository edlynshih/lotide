const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i=0; i<source.length; i++) {
    let found = false;
    for (let j=0; j<itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        found = true;
      }
    }
    if (!found) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;


// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(["1", "2", "3"], ["1", "2", "3"]));
// console.log(without(["1", "2", "3"], ["1", "2", 8]));
// console.log(without(["1", "2", "3"], [1, 2, 3]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
