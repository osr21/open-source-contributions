const { setNestedValue } = require('../utils/set-nested');

describe('setNestedValue', () => {
  it('sets a deeply nested value', () => {
    const result = setNestedValue({ a: { b: 1 } }, 'a.b', 99);
    expect(result.a.b).toBe(99);
  });
  it('does not mutate the original object', () => {
    const original = { a: { b: 1 } };
    setNestedValue(original, 'a.b', 99);
    expect(original.a.b).toBe(1);
  });
  it('creates intermediate keys', () => {
    const result = setNestedValue({}, 'a.b.c', 5);
    expect(result.a.b.c).toBe(5);
  });
});
