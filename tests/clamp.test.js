const { clamp } = require('../utils/clamp');

describe('clamp', () => {
  it('returns value when within range', () => { expect(clamp(5, 0, 10)).toBe(5); });
  it('returns min when value is below range', () => { expect(clamp(-5, 0, 10)).toBe(0); });
  it('returns max when value is above range', () => { expect(clamp(15, 0, 10)).toBe(10); });
  it('works with negative ranges', () => { expect(clamp(-3, -10, -1)).toBe(-3); });
  it('returns min when value equals min', () => { expect(clamp(0, 0, 10)).toBe(0); });
  it('returns max when value equals max', () => { expect(clamp(10, 0, 10)).toBe(10); });
});
