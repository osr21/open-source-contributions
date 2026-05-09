const { compareSemver, satisfies } = require('../utils/semver');

describe('compareSemver', () => {
  it('returns 0 for equal versions', () => { expect(compareSemver('1.2.3', '1.2.3')).toBe(0); });
  it('returns 1 when a > b', () => { expect(compareSemver('2.0.0', '1.9.9')).toBe(1); });
  it('returns -1 when a < b', () => { expect(compareSemver('1.0.0', '1.0.1')).toBe(-1); });
  it('compares minor versions', () => { expect(compareSemver('1.3.0', '1.2.0')).toBe(1); });
  it('handles v prefix', () => { expect(compareSemver('v1.0.0', 'v1.0.0')).toBe(0); });
});

describe('satisfies', () => {
  it('returns true when version >= minimum', () => { expect(satisfies('2.0.0', '1.0.0')).toBe(true); });
  it('returns false when version < minimum', () => { expect(satisfies('1.0.0', '2.0.0')).toBe(false); });
});
