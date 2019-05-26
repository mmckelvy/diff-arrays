# Diff Arrays
Simple utility to diff arrays. Handles arrays of primitives (e.g. strings, numbers) as well as arrays of objects. Can compute a simple difference or a symmetric difference (more on this below).

## Install

    npm install @mmckelvy/diff-arrays

## Usage
Compute a simple difference:

    const diffArrays = require('@mmckelvy/diff-arrays');

    const diffed = diffArrays([1, 2, 3], [2, 3, 4]);
    console.log(diffed); // [1]

Compute a symmetric difference:

    const diffed = diffArrays([1, 2, 3], [2, 3, 4], {symmetric: true});
    console.log(diffed); // [1, 4]

Works with arrays of objects.  Just pass the key on which you want to diff:

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

    const diffed = diffArrays(arr1, arr2, {key: 'id', symmetric: true});
    console.log(diffed); // [{id: 1, name: 'Joe'}, {id: 4, name: 'Linda'}];

## Diffing mechanics and symmetric difference
When diffing two arrays, order matters.  Suppose we have two arrays:

    const a = [1, 2, 3];
    const b = [2, 3, 4];

`diffArrays(a, b)` will return `[1]`, while `diffArrays(b, a)` will return `[4]`.  Why?  Because in the first case, we are asking "what is in array `a` that is not in array `b`?, while in the second case, we are asking "what is in array `b` that is not in array `a`?

If you are looking for the answer to *both* questions, you are looking for the *symmetric difference*: "what is in array `a` that is not in array `b` *and* what is in array `b` that is not in array `a`."  To get the symmetric difference with `diffArrays`, pass `{symmetric: true}` in the options object.

## API
#### diffArrays(arr1, arr2, options)
`arr1` and `arr2` can be arrays of primitives or objects.  If you pass arrays of objects, include the key you want to use for the diff in the `options` argument: `{key: 'someKey}`.  Returns an array with the diffed elements.

* `arr1 {string[] | number[] | Object[]}`
* `arr2 {string[] | number[] | Object[]}`
* `options {Object}`
* `options.key {string} - The key to use to diff an array of objects.`
* `options.symmetric {boolean} - Perform a symmetric diff.`

Returns `{string[] | number[] | Object[]}`

## Testing
This module uses [ava](https://github.com/avajs/ava) for testing.  To run the tests, make sure the dev dependencies are installed and then run:

    npm test

## License
### MIT
