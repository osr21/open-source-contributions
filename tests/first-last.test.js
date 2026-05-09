const { first, last, sample } = require('../utils/first-last');

describe('first', () => {
  it('returns first element by default', () => { expect(first([1,2,3])).toBe(1); });
  it('returns first N elements', () => { expect(first([1,2,3,4,5], 3)).toEqual([1,2,3]); });
});

describe('last', () => {
  it('returns last element by default', () => { expect(last([1,2,3])).toBe(3); });
  it('returns last N elements', () => { expect(last([1,2,3,4,5], 2)).toEqual([4,5]); });
});

describe('sample', () => {
  const arr = [1,2,3,4,5];
  it('returns a single item from the array', () => { expect(arr).toContain(sample(arr)); });
  it('returns n unique items', () => {
    const result = sample(arr, 3);
    expect(result).toHaveLength(3);
    result.forEach(v => expect(arr).toContain(v));
  });
});
