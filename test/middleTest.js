const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([]))
console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6, 7]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned


const words = ["hello", "world", "lighthouse"];
const midwords = middle(words); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(midwords, ["world"]);

