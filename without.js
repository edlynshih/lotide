const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i=0; i<source.length; i++) {
    let found = false;
    for (let j=0; j<itemsToRemove.length; j++) {
      if(source[i] === itemsToRemove[j]) {
        found = true;
      }
    }
    if (!found) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;