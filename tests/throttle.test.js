const { throttle } = require('../utils/throttle');

describe('throttle', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('calls function immediately on first invocation', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 300);
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('ignores calls within the limit period', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 300);
    throttled(); throttled(); throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('allows call again after limit period', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 300);
    throttled();
    vi.advanceTimersByTime(300);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
