/**
 * Format a number as currency.
 * @param {number} amount
 * @param {string} currency - ISO 4217 code e.g. 'USD'
 * @param {string} locale
 * @returns {string}
 */
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

module.exports = { formatCurrency };
