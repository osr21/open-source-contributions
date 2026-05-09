const { noop, identity, alwaysTrue, alwaysFalse } = require('../utils/noop');

describe('noop', () => {
  it('returns undefined', () => { expect(noop()).toBeUndefined(); });
  it('accepts any arguments without error', () => { expect(() => noop(1,2,3)).not.toThrow(); });
});

describe('identity', () => {
  it('returns its argument unchanged', () => { expect(identity(42)).toBe(42); expect(identity('hi')).toBe('hi'); });
});

describe('alwaysTrue', () => {
  it('always returns true', () => { expect(alwaysTrue()).toBe(true); });
});

describe('alwaysFalse', () => {
  it('always returns false', () => { expect(alwaysFalse()).toBe(false); });
});
