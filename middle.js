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

 module.exports = middle;
