/**
 * Swap keys and values of an object.
 * invert({ a: '1', b: '2' }) => { '1': 'a', '2': 'b' }
 */
function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
module.exports = { invert };
