/**
 * Group an array of objects by a key.
 * @param {Object[]} arr
 * @param {string|Function} key
 * @returns {Object}
 */
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = typeof key === 'function' ? key(item) : item[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

module.exports = { groupBy };
