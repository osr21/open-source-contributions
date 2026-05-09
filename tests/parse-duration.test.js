const { formatDuration, parseDuration } = require('../utils/parse-duration');

describe('formatDuration', () => {
  it('formats seconds', () => { expect(formatDuration(5000)).toBe('5s'); });
  it('formats minutes and seconds', () => { expect(formatDuration(90000)).toBe('1m 30s'); });
  it('formats hours', () => { expect(formatDuration(3600000)).toBe('1h'); });
  it('formats days', () => { expect(formatDuration(86400000)).toBe('1d'); });
});

describe('parseDuration', () => {
  it('parses seconds', () => { expect(parseDuration('5s')).toBe(5000); });
  it('parses minutes', () => { expect(parseDuration('2m')).toBe(120000); });
  it('parses compound', () => { expect(parseDuration('1h 30m')).toBe(5400000); });
});
