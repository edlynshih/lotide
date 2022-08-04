const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Name', 'Is', 'Edlyn'] for ['My', 'Name', 'Is', 'Edlyn']", () => {
    assert.deepEqual(tail(['My', 'Name', 'Is', 'Edlyn']), ['Name', 'Is', 'Edlyn']); 
  });

  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });

});