const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let ans = array.slice(1);
  return ans;
};

const result = tail(["My", "Name", "Is", "Edlyn"]);
assertEqual(result.length, 3); // ensure we get back three elements
assertEqual(result[0], "Name"); // ensure first element is "Name"
assertEqual(result[1], "Is"); // ensure second element is "Is"


// Test Case: Check the original array
const words = ["Yo Yo", "Edlyn", "Shih"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: An array with only one element should yield an empty array for its tail
const check = ["Hi"];
console.log(tail(check)); // Output should be an empty array

// An empty array should yield an empty array for its tail
const test = [];
console.log(tail(test)); // Output should be an empty array
