function formatNumber(n, locale = 'en-US') { return new Intl.NumberFormat(locale).format(n); }
function formatPercent(n, dec = 1) { return (n * 100).toFixed(dec) + '%'; }
function formatCompact(n, locale = 'en-US') {
  return new Intl.NumberFormat(locale, { notation: 'compact' }).format(n);
}
module.exports = { formatNumber, formatPercent, formatCompact };
