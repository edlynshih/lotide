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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]; //i = index of letter
    if (letter.toLowerCase() === letter.toUpperCase()) {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    } 
    if (results[letter]) {
      results[letter].push(i);
    }
  }
  return results;
};
console.log(letterPositions('lighthouse in the house'));

assertArraysEqual({h:[0], e: [1], l: [2,3], o: [4]}.h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

// {
// h: [0],
// e: [1],
// l: [2,3],
// 0: [4]
//}

// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

