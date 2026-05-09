function parseCsv(csv) {
  const lines = csv.trim().split('
');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const vals = line.split(',').map(v => v.trim());
    return Object.fromEntries(headers.map((h, i) => [h, vals[i] ?? '']));
  });
}
function toCsv(data) {
  if (!data.length) return '';
  const h = Object.keys(data[0]);
  return [h.join(','), ...data.map(r => h.map(k => r[k] ?? '').join(','))].join('
');
}
module.exports = { parseCsv, toCsv };
