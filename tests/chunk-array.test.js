const { chunkArray } = require('../utils/chunk-array');

describe('chunkArray', () => {
  it('splits into equal chunks', () => {
    expect(chunkArray([1,2,3,4], 2)).toEqual([[1,2],[3,4]]);
  });
  it('handles remainder', () => {
    expect(chunkArray([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
  });
  it('returns whole array when size >= length', () => {
    expect(chunkArray([1,2,3], 10)).toEqual([[1,2,3]]);
  });
  it('returns empty array for empty input', () => {
    expect(chunkArray([], 3)).toEqual([]);
  });
});
