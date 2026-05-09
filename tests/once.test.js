const { once } = require('../utils/once');

describe('once', () => {
  it('calls the function only once', () => {
    const fn = vi.fn(() => 42);
    const onced = once(fn);
    onced(); onced(); onced();
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('always returns the first result', () => {
    let n = 0;
    const onced = once(() => ++n);
    expect(onced()).toBe(1);
    expect(onced()).toBe(1);
    expect(onced()).toBe(1);
  });
});
