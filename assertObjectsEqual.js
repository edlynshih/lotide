const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (!eqObjects(obj1, obj2)) {
    console.log(`🚨🚨🚨 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`); //using util library's inspect function to see detailed object output to the console.
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;
