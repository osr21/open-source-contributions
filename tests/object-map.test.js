const { objectMap, objectMapKeys } = require('../utils/object-map');

describe('objectMap', () => {
  it('maps over values', () => {
    expect(objectMap({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 });
  });
  it('passes key to mapper', () => {
    expect(objectMap({ x: 1 }, (v, k) => k + v)).toEqual({ x: 'x1' });
  });
});

describe('objectMapKeys', () => {
  it('transforms keys', () => {
    expect(objectMapKeys({ a: 1, b: 2 }, k => k.toUpperCase())).toEqual({ A: 1, B: 2 });
  });
});
