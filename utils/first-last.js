/**
 * Get the first N items of an array.
 */
function first(arr, n = 1) { return n === 1 ? arr[0] : arr.slice(0, n); }

/**
 * Get the last N items of an array.
 */
function last(arr, n = 1) { return n === 1 ? arr[arr.length - 1] : arr.slice(-n); }

/**
 * Get a random sample of N items from an array (no repeats).
 */
function sample(arr, n = 1) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < Math.min(n, copy.length); i++) {
    const idx = Math.floor(Math.random() * (copy.length - i));
    result.push(copy[idx]);
    copy[idx] = copy[copy.length - 1 - i];
  }
  return n === 1 ? result[0] : result;
}

module.exports = { first, last, sample };
