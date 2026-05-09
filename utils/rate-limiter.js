/**
 * Token bucket rate limiter.
 * Allows up to 'limit' calls per 'windowMs' milliseconds.
 */
class RateLimiter {
  constructor(limit, windowMs) {
    this._limit = limit;
    this._windowMs = windowMs;
    this._calls = [];
  }

  tryCall() {
    const now = Date.now();
    this._calls = this._calls.filter(t => now - t < this._windowMs);
    if (this._calls.length >= this._limit) return false;
    this._calls.push(now);
    return true;
  }

  remaining() {
    const now = Date.now();
    this._calls = this._calls.filter(t => now - t < this._windowMs);
    return Math.max(0, this._limit - this._calls.length);
  }

  reset() { this._calls = []; }
}

module.exports = { RateLimiter };
