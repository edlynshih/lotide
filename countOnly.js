const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if(itemsToCount[item]) {
      if(!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  }
  //returns undefined if there is no key in the results object
  if(Object.keys(results).length  === 0) {
    return undefined;
  } 
  return results;
}

module.exports = countOnly;
