/**
 * Format milliseconds into a human-readable duration string.
 * formatDuration(90061000) => '1d 1h 1m 1s'
 */
function formatDuration(ms) {
  const parts = [];
  const d = Math.floor(ms / 86400000); if (d) parts.push(d + 'd');
  const h = Math.floor((ms % 86400000) / 3600000); if (h) parts.push(h + 'h');
  const m = Math.floor((ms % 3600000) / 60000); if (m) parts.push(m + 'm');
  const s = Math.floor((ms % 60000) / 1000); if (s || !parts.length) parts.push(s + 's');
  return parts.join(' ');
}

/**
 * Parse a duration string into milliseconds.
 * parseDuration('1h 30m') => 5400000
 */
function parseDuration(str) {
  const units = { d: 86400000, h: 3600000, m: 60000, s: 1000, ms: 1 };
  let total = 0;
  for (const [, n, u] of str.matchAll(/(d+(?:.d+)?)s*(ms|[dhms])/g))
    total += parseFloat(n) * (units[u] || 0);
  return total;
}

module.exports = { formatDuration, parseDuration };
