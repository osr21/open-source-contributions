const { invert } = require('../utils/invert');

describe('invert', () => {
  it('swaps keys and values', () => {
    expect(invert({ a: '1', b: '2' })).toEqual({ '1': 'a', '2': 'b' });
  });
  it('handles empty object', () => { expect(invert({})).toEqual({}); });
  it('is the inverse of itself', () => {
    const obj = { a: 'x', b: 'y' };
    expect(invert(invert(obj))).toEqual(obj);
  });
});
