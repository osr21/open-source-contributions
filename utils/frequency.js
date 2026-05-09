/**
 * Build a frequency map of array items.
 * frequency(['a','b','a','c','b','a']) => { a: 3, b: 2, c: 1 }
 */
function frequency(arr) {
  return arr.reduce((map, item) => {
    map[item] = (map[item] || 0) + 1;
    return map;
  }, {});
}

/**
 * Return the most frequent item in an array.
 */
function mostFrequent(arr) {
  const freq = frequency(arr);
  return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0];
}

module.exports = { frequency, mostFrequent };
