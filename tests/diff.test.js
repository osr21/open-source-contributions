const { diff } = require('../utils/diff');

describe('diff', () => {
  it('detects added keys', () => {
    expect(diff({ a: 1 }, { a: 1, b: 2 }).added).toEqual(['b']);
  });
  it('detects removed keys', () => {
    expect(diff({ a: 1, b: 2 }, { a: 1 }).removed).toEqual(['b']);
  });
  it('detects changed values', () => {
    expect(diff({ a: 1 }, { a: 2 }).changed).toEqual(['a']);
  });
  it('returns empty arrays for identical objects', () => {
    const result = diff({ a: 1 }, { a: 1 });
    expect(result.added).toEqual([]);
    expect(result.removed).toEqual([]);
    expect(result.changed).toEqual([]);
  });
});
