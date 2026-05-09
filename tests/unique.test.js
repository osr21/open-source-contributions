const { unique, uniqueBy } = require('../utils/unique');

describe('unique', () => {
  it('removes duplicate primitives', () => {
    expect(unique([1,2,2,3,3,3])).toEqual([1,2,3]);
  });
  it('preserves order', () => {
    expect(unique([3,1,2,1,3])).toEqual([3,1,2]);
  });
});

describe('uniqueBy', () => {
  it('removes duplicates by key', () => {
    const items = [{ id: 1, v: 'a' }, { id: 2, v: 'b' }, { id: 1, v: 'c' }];
    expect(uniqueBy(items, 'id')).toHaveLength(2);
    expect(uniqueBy(items, 'id')[0].v).toBe('a');
  });
});
