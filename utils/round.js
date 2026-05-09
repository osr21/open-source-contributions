function round(n, d = 0) { const f = 10**d; return Math.round(n * f) / f; }
function floor(n, d = 0) { const f = 10**d; return Math.floor(n * f) / f; }
function ceil(n, d = 0)  { const f = 10**d; return Math.ceil(n * f) / f; }
module.exports = { round, floor, ceil };
