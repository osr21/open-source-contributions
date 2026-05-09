function diff(a, b) {
  const ka = new Set(Object.keys(a)), kb = new Set(Object.keys(b));
  return {
    added:   [...kb].filter(k => !ka.has(k)),
    removed: [...ka].filter(k => !kb.has(k)),
    changed: [...ka].filter(k => kb.has(k) && a[k] !== b[k])
  };
}
module.exports = { diff };
