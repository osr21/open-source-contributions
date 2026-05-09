const { formatBytes } = require('../utils/format-bytes');

describe('formatBytes', () => {
  it('formats 0 bytes', () => { expect(formatBytes(0)).toBe('0 Bytes'); });
  it('formats kilobytes', () => { expect(formatBytes(1024)).toBe('1 KB'); });
  it('formats megabytes', () => { expect(formatBytes(1048576)).toBe('1 MB'); });
  it('formats with decimals', () => { expect(formatBytes(1536, 1)).toBe('1.5 KB'); });
});
