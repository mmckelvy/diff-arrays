/**
* Returns the difference between arrays.
*/
module.exports = function diffArrays(arr1, arr2, options) {
  const hash = arr2.reduce((acc, el) => {
    acc[el] = true;

    return acc;
  }, {});

  return arr1.filter((el) => {
    return !hash.hasOwnProperty(el);
  });
};
