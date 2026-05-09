/**
 * Count how many times a substring appears in a string.
 * countOccurrences('banana', 'an') => 2
 */
function countOccurrences(str, sub) {
  if (!sub) return 0;
  let count = 0, pos = 0;
  while ((pos = str.indexOf(sub, pos)) !== -1) { count++; pos += sub.length; }
  return count;
}

/**
 * Find all start indices of a substring in a string.
 */
function findAllIndices(str, sub) {
  const indices = [];
  let pos = 0;
  while ((pos = str.indexOf(sub, pos)) !== -1) { indices.push(pos); pos += sub.length; }
  return indices;
}

module.exports = { countOccurrences, findAllIndices };
