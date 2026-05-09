const { safeJsonParse, safeJsonStringify } = require('../utils/safe-json');

describe('safeJsonParse', () => {
  it('parses valid JSON', () => { expect(safeJsonParse('{"a":1}')).toEqual({ a: 1 }); });
  it('returns fallback for invalid JSON', () => { expect(safeJsonParse('bad', null)).toBe(null); });
  it('returns custom fallback', () => { expect(safeJsonParse('bad', [])).toEqual([]); });
});

describe('safeJsonStringify', () => {
  it('stringifies objects', () => { expect(safeJsonStringify({ a: 1 })).toBe('{"a":1}'); });
  it('returns fallback for circular reference', () => {
    const obj = {}; obj.self = obj;
    expect(safeJsonStringify(obj, 'err')).toBe('err');
  });
});
