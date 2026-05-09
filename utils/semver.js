function compareSemver(a, b) {
  const p = v => v.replace(/^v/, '').split('.').map(Number);
  const [aMa, aMi, aPa] = p(a), [bMa, bMi, bPa] = p(b);
  if (aMa !== bMa) return aMa > bMa ? 1 : -1;
  if (aMi !== bMi) return aMi > bMi ? 1 : -1;
  if (aPa !== bPa) return aPa > bPa ? 1 : -1;
  return 0;
}
function satisfies(version, min) { return compareSemver(version, min) >= 0; }
module.exports = { compareSemver, satisfies };
