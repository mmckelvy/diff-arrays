const test = require('ava');

const diffArrays = require('./diff-arrays');

test('Should diff arrays of primitives', t => {
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];

  const actual = diffArrays(arr1, arr2);
  const expected = [1];

  t.deepEqual(actual, expected);
});
