const { mergeDeep } = require('../utils/merge-deep');

describe('mergeDeep', () => {
  it('merges flat objects', () => {
    expect(mergeDeep({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
  it('source takes precedence for same keys', () => {
    expect(mergeDeep({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });
  it('deeply merges nested objects', () => {
    expect(mergeDeep({ a: { x: 1, y: 2 } }, { a: { y: 99, z: 3 } }))
      .toEqual({ a: { x: 1, y: 99, z: 3 } });
  });
  it('does not mutate the target', () => {
    const t = { a: 1 };
    mergeDeep(t, { b: 2 });
    expect(t).toEqual({ a: 1 });
  });
});
