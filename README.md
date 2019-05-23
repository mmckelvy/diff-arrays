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

    const diffed = diffArrays(arr1, arr2, {prop: 'id', symmetric: true});
    console.log(diffed); // [{id: 1, name: 'Joe'}, {id: 4, name: 'Linda'}];

