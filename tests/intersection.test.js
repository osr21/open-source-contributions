const { intersection, difference, union } = require('../utils/intersection');

describe('intersection', () => {
  it('returns common elements', () => {
    expect(intersection([1,2,3], [2,3,4])).toEqual([2,3]);
  });
  it('returns empty if no common elements', () => {
    expect(intersection([1,2], [3,4])).toEqual([]);
  });
});

describe('difference', () => {
  it('returns elements in a not in b', () => {
    expect(difference([1,2,3], [2,3])).toEqual([1]);
  });
});

describe('union', () => {
  it('returns all unique elements from both', () => {
    expect(union([1,2,3], [2,3,4])).toEqual([1,2,3,4]);
  });
});
