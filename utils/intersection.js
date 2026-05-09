function intersection(a, b) { const s = new Set(b); return a.filter(v => s.has(v)); }
function difference(a, b) { const s = new Set(b); return a.filter(v => !s.has(v)); }
function union(a, b) { return [...new Set([...a, ...b])]; }
module.exports = { intersection, difference, union };
