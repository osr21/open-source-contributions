function sum(arr) { return arr.reduce((a, n) => a + n, 0); }
function average(arr) { return arr.length ? sum(arr) / arr.length : 0; }
function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
module.exports = { sum, average, median };
