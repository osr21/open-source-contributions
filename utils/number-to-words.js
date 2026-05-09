const ones = ['','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

/**
 * Convert a non-negative integer (< 1,000,000) to English words.
 */
function numberToWords(n) {
  if (n === 0) return 'zero';
  if (n < 0) return 'negative ' + numberToWords(-n);
  if (n < 20) return ones[n];
  if (n < 100) return tens[Math.floor(n/10)] + (n % 10 ? '-' + ones[n % 10] : '');
  if (n < 1000) return ones[Math.floor(n/100)] + ' hundred' + (n % 100 ? ' ' + numberToWords(n % 100) : '');
  if (n < 1000000) return numberToWords(Math.floor(n/1000)) + ' thousand' + (n % 1000 ? ' ' + numberToWords(n % 1000) : '');
  return String(n);
}

module.exports = { numberToWords };
