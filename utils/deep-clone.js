/**
 * Deep clone a value using structuredClone with JSON fallback.
 * @param {*} value
 * @returns {*}
 */
function deepClone(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

module.exports = { deepClone };
