const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const results = {};
  const newSen = sentence.toLowerCase().replace(/\s/g, "");
  for (let letter of newSen) {
    if (!results[letter]) {
      results[letter] = 0;
    } 
    results[letter]++
  }
  return results;
}


const result1 = countLetters("lighthouse in the house");
console.log(result1);