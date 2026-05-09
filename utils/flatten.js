/**
 * Flatten a nested array to a given depth.
 * @param {Array} arr
 * @param {number} depth
 * @returns {Array}
 */
function flatten(arr, depth = Infinity) {
  return arr.flat(depth);
}

/**
 * Deeply flatten without limit.
 * @param {Array} arr
 * @returns {Array}
 */
function deepFlatten(arr) {
  return arr.flat(Infinity);
}

module.exports = { flatten, deepFlatten };
