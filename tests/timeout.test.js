const { withTimeout } = require('../utils/timeout');

describe('withTimeout', () => {
  it('resolves when promise completes in time', async () => {
    const fast = Promise.resolve('done');
    await expect(withTimeout(fast, 1000)).resolves.toBe('done');
  });

  it('rejects with timeout error when promise is too slow', async () => {
    const slow = new Promise(r => setTimeout(r, 10000));
    await expect(withTimeout(slow, 1, 'too slow')).rejects.toThrow('too slow');
  });
});
