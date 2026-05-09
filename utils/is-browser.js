function isBrowser() { return typeof window !== 'undefined' && typeof document !== 'undefined'; }
function isNode() { return typeof process !== 'undefined' && !!process.versions?.node; }
function prefersDark() { return isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches; }
module.exports = { isBrowser, isNode, prefersDark };
