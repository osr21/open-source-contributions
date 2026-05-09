/**
 * Format a date to a readable string.
 * @param {Date|string|number} date
 * @param {string} locale
 * @returns {string}
 */
function formatDate(date, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(new Date(date));
}

/**
 * Return relative time (e.g. "3 days ago").
 * @param {Date|string|number} date
 * @returns {string}
 */
function timeAgo(date) {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const diff = (new Date(date) - Date.now()) / 1000;
  if (Math.abs(diff) < 60) return rtf.format(Math.round(diff), 'second');
  if (Math.abs(diff) < 3600) return rtf.format(Math.round(diff / 60), 'minute');
  if (Math.abs(diff) < 86400) return rtf.format(Math.round(diff / 3600), 'hour');
  return rtf.format(Math.round(diff / 86400), 'day');
}

module.exports = { formatDate, timeAgo };
