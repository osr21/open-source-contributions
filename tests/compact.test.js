const { compact, compactObject } = require('../utils/compact');

describe('compact', () => {
  it('removes falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3]);
  });
  it('returns empty array for all-falsy input', () => {
    expect(compact([false, null, 0, ''])).toEqual([]);
  });
});

describe('compactObject', () => {
  it('removes falsy-valued keys', () => {
    expect(compactObject({ a: 1, b: 0, c: '', d: null, e: 'hi' })).toEqual({ a: 1, e: 'hi' });
  });
});
