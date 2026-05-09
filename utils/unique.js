/**
 * Remove duplicate values from an array.
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Remove duplicates from array of objects by a key.
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object[]}
 */
function uniqueBy(arr, key) {
  const seen = new Set();
  return arr.filter(item => {
    const val = item[key];
    if (seen.has(val)) return false;
    seen.add(val);
    return true;
  });
}

module.exports = { unique, uniqueBy };
