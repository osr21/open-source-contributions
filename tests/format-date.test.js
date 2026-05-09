const { formatDate, timeAgo } = require('../utils/format-date');

describe('formatDate', () => {
  it('returns a non-empty formatted string', () => {
    const result = formatDate('2024-01-15');
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
  it('includes the year', () => {
    expect(formatDate('2024-06-01')).toContain('2024');
  });
});

describe('timeAgo', () => {
  it('returns a relative string', () => {
    const recent = new Date(Date.now() - 5000).toISOString();
    expect(timeAgo(recent)).toMatch(/second|minute|hour|day/);
  });
});
