const { randomInt, randomItem, shuffle } = require('../utils/random');

describe('randomInt', () => {
  it('returns integer within range', () => {
    for (let i = 0; i < 100; i++) {
      const n = randomInt(1, 10);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(10);
    }
  });
});

describe('randomItem', () => {
  it('returns an item from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < 20; i++) {
      expect(arr).toContain(randomItem(arr));
    }
  });
});

describe('shuffle', () => {
  it('returns an array of the same length', () => {
    expect(shuffle([1,2,3,4,5])).toHaveLength(5);
  });
  it('contains the same elements', () => {
    const arr = [1,2,3,4,5];
    expect(shuffle(arr).sort()).toEqual([...arr].sort());
  });
  it('does not mutate original array', () => {
    const arr = [1,2,3];
    shuffle(arr);
    expect(arr).toEqual([1,2,3]);
  });
});
