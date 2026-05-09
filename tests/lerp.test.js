const { lerp, mapRange, normalize } = require('../utils/lerp');

describe('lerp', () => {
  it('interpolates halfway', () => { expect(lerp(0, 100, 0.5)).toBe(50); });
  it('returns start at t=0', () => { expect(lerp(10, 20, 0)).toBe(10); });
  it('returns end at t=1', () => { expect(lerp(10, 20, 1)).toBe(20); });
});

describe('mapRange', () => {
  it('maps value from one range to another', () => {
    expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
  });
});

describe('normalize', () => {
  it('normalizes to 0 at min', () => { expect(normalize(0, 0, 100)).toBe(0); });
  it('normalizes to 1 at max', () => { expect(normalize(100, 0, 100)).toBe(1); });
  it('normalizes mid value', () => { expect(normalize(50, 0, 100)).toBe(0.5); });
});
