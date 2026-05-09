const { deepEqual } = require('../utils/deep-equal');

describe('deepEqual', () => {
  it('returns true for identical primitives', () => { expect(deepEqual(1, 1)).toBe(true); });
  it('returns false for different primitives', () => { expect(deepEqual(1, 2)).toBe(false); });
  it('compares nested objects', () => {
    expect(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
    expect(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  });
  it('compares arrays deeply', () => {
    expect(deepEqual([1,[2,3]], [1,[2,3]])).toBe(true);
    expect(deepEqual([1,2], [1,3])).toBe(false);
  });
  it('handles null', () => {
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(null, {})).toBe(false);
  });
});
