const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(arr) {
    return arr.reduce((pre, cur) => Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur), [])
}


// console.log(flatten([[1, 2], [3, 4], 5, [6], 7])) // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, [[3, 4]], 5, [6]]))
// console.log(flatten([1, [2, [[3, 4]]], [[5]], [6], 7, 8]))
// console.log(flatten([1, 2, 3, 4, 5, 6]))
// console.log(flatten([1]))
// console.log(flatten([[1]]))