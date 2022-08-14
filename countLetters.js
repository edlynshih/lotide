const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

// const result1 = countLetters("lighthouse in the house");
// console.log(result1);
