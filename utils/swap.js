/**
 * Swap two elements in an array (returns new array).
 */
function swap(arr, i, j) {
  const copy = [...arr];
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

/**
 * Rotate array left by n positions.
 * rotate([1,2,3,4,5], 2) => [3,4,5,1,2]
 */
function rotate(arr, n) {
  const len = arr.length;
  const shift = ((n % len) + len) % len;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
}

/**
 * Reverse a portion of an array.
 */
function reverseSlice(arr, start, end) {
  const copy = [...arr];
  while (start < end) {
    [copy[start], copy[end]] = [copy[end], copy[start]];
    start++; end--;
  }
  return copy;
}

module.exports = { swap, rotate, reverseSlice };
