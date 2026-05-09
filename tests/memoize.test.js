const { memoize } = require('../utils/memoize');

describe('memoize', () => {
  it('caches results and avoids repeated calls', () => {
    const fn = vi.fn(x => x * 2);
    const memo = memoize(fn);
    expect(memo(5)).toBe(10);
    expect(memo(5)).toBe(10);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('computes separately for different args', () => {
    const fn = vi.fn(x => x * 3);
    const memo = memoize(fn);
    memo(2); memo(3);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
