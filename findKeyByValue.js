const findKeyByValue = function (obj, value) {
  for (let item in obj) { //returns key
    if (obj[item] === value) {
      return item;
    }
  }
}

module.exports = findKeyByValue;



