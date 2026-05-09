/**
 * Set a deeply nested value on an object using a dot-path string (immutable).
 * setNestedValue({ a: { b: 1 } }, 'a.b', 99) => { a: { b: 99 } }
 */
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  const result = { ...obj };
  let cur = result;
  for (let i = 0; i < keys.length - 1; i++) {
    cur[keys[i]] = { ...cur[keys[i]] };
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = value;
  return result;
}
module.exports = { setNestedValue };
