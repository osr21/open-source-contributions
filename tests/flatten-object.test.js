const { flattenObject } = require('../utils/flatten-object');

describe('flattenObject', () => {
  it('flattens nested object', () => {
    expect(flattenObject({ a: { b: { c: 1 } } })).toEqual({ 'a.b.c': 1 });
  });
  it('handles flat object unchanged', () => {
    expect(flattenObject({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });
  it('preserves arrays as values', () => {
    expect(flattenObject({ a: [1,2,3] })).toEqual({ a: [1,2,3] });
  });
});
