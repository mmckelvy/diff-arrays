const test = require('ava');

const diffArrays = require('./diff-arrays');

test('Should diff arrays of primitives', t => {
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];

  const actual = diffArrays(arr1, arr2);
  const expected = [1];

  t.deepEqual(actual, expected);
});

test('Should diff arrays of objects', t => {
  const arr1 = [
    {id: 1, name: 'Joe'},
    {id: 2, name: 'Bill'},
    {id: 3, name: 'Jane'},
  ];

  const arr2 = [
    {id: 2, name: 'Bill'},
    {id: 3, name: 'Jane'},
    {id: 4, name: 'Linda'},
  ];

  const actual = diffArrays(arr1, arr2, {key: 'id'});
  const expected = [{id: 1, name: 'Joe'}];

  t.deepEqual(actual, expected);
});

test('Should symmetric diff arrays of primitives', t => {
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];

  const actual = diffArrays(arr1, arr2, {symmetric: true});
  const expected = [1, 4];

  t.deepEqual(actual, expected);
});

test('Should symmetric diff arrays of objects', t => {
  const arr1 = [
    {id: 1, name: 'Joe'},
    {id: 2, name: 'Bill'},
    {id: 3, name: 'Jane'},
  ];

  const arr2 = [
    {id: 2, name: 'Bill'},
    {id: 3, name: 'Jane'},
    {id: 4, name: 'Linda'},
  ];

  const actual = diffArrays(arr1, arr2, {key: 'id', symmetric: true});
  const expected = [{id: 1, name: 'Joe'}, {id: 4, name: 'Linda'}];

  t.deepEqual(actual, expected);
});

test('Should return [] for no difference.', t => {
  const arr1 = [2, 3];
  const arr2 = [2, 3, 4];

  const actual = diffArrays(arr1, arr2);
  const expected = [];

  t.deepEqual(actual, expected);
});

test('Should handle "one-sided" symmetric difference.', t => {
  const arr1 = [2, 3];
  const arr2 = [2, 3, 4];

  const actual = diffArrays(arr1, arr2, {symmetric: true});
  const expected = [4];

  t.deepEqual(actual, expected);
});

test('Should work with booleans.', t => {
  const arr1 = [true, false];
  const arr2 = [false, false, false];

  const actual = diffArrays(arr1, arr2);
  const expected = [true];

  t.deepEqual(actual, expected);
});
