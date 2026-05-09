const { uuid } = require('../utils/uuid');

describe('uuid', () => {
  it('returns a string', () => { expect(typeof uuid()).toBe('string'); });
  it('matches UUID v4 format', () => {
    expect(uuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
  it('generates unique values', () => {
    const ids = new Set(Array.from({ length: 100 }, uuid));
    expect(ids.size).toBe(100);
  });
});
