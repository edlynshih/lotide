const countLetters = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase().replace(/\s/g, ""); //convert the sentence to lower case and get rid of all space
  for (const letter of string) {
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
}

module.exports = countLetters;

