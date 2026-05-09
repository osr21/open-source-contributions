/**
 * Get a deeply nested value from an object using a dot-path string.
 * getNestedValue({ a: { b: { c: 42 } } }, 'a.b.c') => 42
 */
function getNestedValue(obj, path, fallback = undefined) {
  return path.split('.').reduce((acc, key) =>
    acc != null && acc[key] !== undefined ? acc[key] : fallback, obj);
}
module.exports = { getNestedValue };
