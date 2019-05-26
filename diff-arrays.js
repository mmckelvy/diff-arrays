function diff(arr1, arr2, key) {
  const arr2Hash = arr2.reduce((acc, el) => {
    acc[key ? el[key] : el] = true;

    return acc;

  }, {});

  return arr1.reduce((acc, el) => {
    if (!arr2Hash.hasOwnProperty(key ? el[key] : el)) {
      acc.push(el);
    }

    return acc;

  }, []);
}

function symmetricDiff(arr1, arr2, key) {
  return diff(arr1, arr2, key).concat(diff(arr2, arr1, key));
}

/**
* Returns the difference between arrays.
*
* @param {Array} arr1 - Can be an array of primitives or an array of objects.
* @param {Array} arr2 - Same as arr1.
* @param {Object} options
*
* @param {string} options.key - If diffing an array of objects, the key used for the diffing.
* @param {boolean} options.symmetric - Returns the symmetric diff between two arrays.
*
* @returns {Array} A new array with the different elements.
*/
module.exports = function diffArrays(arr1, arr2, { key, symmetric } = {}) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('Can only diff arrays');
  }

  if (symmetric) {
    return symmetricDiff(arr1, arr2, key);
  }

  return diff(arr1, arr2, key);
};
