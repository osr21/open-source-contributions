/**
 * Clamp all values in an array between min and max.
 */
function clampArray(arr, min, max) {
  return arr.map(v => Math.min(Math.max(v, min), max));
}

/**
 * Normalize an array of numbers to the [0, 1] range.
 */
function normalizeArray(arr) {
  const min = Math.min(...arr), max = Math.max(...arr);
  if (min === max) return arr.map(() => 0);
  return arr.map(v => (v - min) / (max - min));
}

/**
 * Standardize an array (z-score normalization).
 */
function standardize(arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const std = Math.sqrt(arr.reduce((a, b) => a + (b - mean) ** 2, 0) / arr.length);
  return std === 0 ? arr.map(() => 0) : arr.map(v => (v - mean) / std);
}

module.exports = { clampArray, normalizeArray, standardize };
