function diff(arr1, arr2, prop) {
  const arr2Hash = arr2.reduce((acc, el) => {
    acc[prop ? el[prop] : el] = true;

    return acc;

  }, {});

  return arr1.reduce((acc, el) => {
    if (!arr2Hash.hasOwnProperty(prop ? el[prop] : el)) {
      acc.push(el);
    }

    return acc;

  }, []);
}

function symmetricDiff(arr1, arr2, prop) {
  return diff(arr1, arr2, prop).concat(diff(arr2, arr1, prop));
}

/**
* Returns the difference between arrays.
*
* @param {Array} arr1 - Can be an array of primitives or an array of objects.
* @param {Array} arr2 - Same as arr1.
* @param {Object} options.
* @param {string} options.prop - If diffing an array of objects, the prop used for the diffing.
* @param {boolean} options.symmetric - Returns the symmetric diff between two arrays.
*
* @returns {Array} A new array with the different elements.
*/
module.exports = function diffArrays(arr1, arr2, { prop, symmetric } = {}) {
  // Return the simple diff for an array of primitives.
  if (symmetric) {
    return symmetricDiff(arr1, arr2, prop);
  }

  return diff(arr1, arr2, prop);
};
