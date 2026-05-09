const { binarySearch } = require('../utils/binary-search');

describe('binarySearch', () => {
  const arr = [1, 3, 5, 7, 9, 11, 13];
  it('finds element at beginning', () => { expect(binarySearch(arr, 1)).toBe(0); });
  it('finds element at end', () => { expect(binarySearch(arr, 13)).toBe(6); });
  it('finds element in middle', () => { expect(binarySearch(arr, 7)).toBe(3); });
  it('returns -1 for missing element', () => { expect(binarySearch(arr, 4)).toBe(-1); });
  it('returns -1 for empty array', () => { expect(binarySearch([], 1)).toBe(-1); });
});
