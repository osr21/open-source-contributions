const { retry } = require('../utils/retry');

describe('retry', () => {
  it('resolves on first try if successful', async () => {
    const fn = vi.fn().mockResolvedValue('ok');
    const result = await retry(fn, 3, 0);
    expect(result).toBe('ok');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retries on failure and eventually resolves', async () => {
    let attempt = 0;
    const fn = vi.fn(() => {
      attempt++;
      if (attempt < 3) return Promise.reject(new Error('fail'));
      return Promise.resolve('done');
    });
    const result = await retry(fn, 3, 0);
    expect(result).toBe('done');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('throws after all retries exhausted', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('always fails'));
    await expect(retry(fn, 2, 0)).rejects.toThrow('always fails');
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
