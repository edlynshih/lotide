const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]; 
    if (letter.toLowerCase() === letter.toUpperCase()) {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [i];
    } else { 
      results[letter].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;


//console.log(letterPositions('lighthouse in the house'));

// assertArraysEqual({h:[0], e: [1], l: [2,3], o: [4]}.h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);


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

