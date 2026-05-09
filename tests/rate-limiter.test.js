const { RateLimiter } = require('../utils/rate-limiter');

describe('RateLimiter', () => {
  it('allows calls within limit', () => {
    const rl = new RateLimiter(3, 1000);
    expect(rl.tryCall()).toBe(true);
    expect(rl.tryCall()).toBe(true);
    expect(rl.tryCall()).toBe(true);
  });

  it('blocks calls over the limit', () => {
    const rl = new RateLimiter(2, 1000);
    rl.tryCall(); rl.tryCall();
    expect(rl.tryCall()).toBe(false);
  });

  it('reports remaining calls correctly', () => {
    const rl = new RateLimiter(5, 1000);
    rl.tryCall(); rl.tryCall();
    expect(rl.remaining()).toBe(3);
  });

  it('resets correctly', () => {
    const rl = new RateLimiter(2, 1000);
    rl.tryCall(); rl.tryCall();
    rl.reset();
    expect(rl.tryCall()).toBe(true);
  });
});
