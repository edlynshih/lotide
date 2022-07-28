const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}

const eqObjects = function (object1, object2) {
  let keyObj1 = Object.keys(object1);
  let keyObj2 = Object.keys(object2);
  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (let key of keyObj1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        return true;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (!eqObjects(obj1, obj2)) {
    console.log(`🚨🚨🚨 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false