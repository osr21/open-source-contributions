const { getNestedValue } = require('../utils/get-nested');

describe('getNestedValue', () => {
  const obj = { a: { b: { c: 42 } }, x: 1 };
  it('gets a deeply nested value', () => { expect(getNestedValue(obj, 'a.b.c')).toBe(42); });
  it('gets a shallow value', () => { expect(getNestedValue(obj, 'x')).toBe(1); });
  it('returns fallback for missing path', () => {
    expect(getNestedValue(obj, 'a.z.q', 'default')).toBe('default');
  });
  it('returns undefined by default for missing path', () => {
    expect(getNestedValue(obj, 'missing')).toBeUndefined();
  });
});
