const countLetters = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase().replace(/\s/g, "");
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

