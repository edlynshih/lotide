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

const middle = function (array) {
  let middleEle = [];
  let arrlength = Math.floor(array.length/2);
  if(array.length <= 2) {
    return middleEle;
  }
  if(array.length > 2) {
    if(array.length % 2 === 0) {
      middleEle.push(array[arrlength-1]);
      middleEle.push(array[arrlength]);
      return middleEle;
    }
    if(array.length % 2 !== 0) {
      middleEle.push(array[arrlength]);
      return middleEle;
    }
  }
}

 
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