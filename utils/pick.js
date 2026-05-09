/**
 * Pick specific keys from an object.
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
function pick(obj, keys) {
  return Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));
}

/**
 * Omit specific keys from an object.
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object}
 */
function omit(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));
}

module.exports = { pick, omit };
