const middle = function (array) {
  let ans = [];
  const index = Math.floor(array.length / 2)
  if (array.length <= 2) {
    return ans;
  }
  if (array.length % 2 !== 0) {
    ans.push(array[index]);
  } else {
    ans.push(array[index - 1], array[index]);
  }
  return ans;
}

module.exports = middle;
