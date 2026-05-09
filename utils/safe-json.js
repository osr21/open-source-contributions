function safeJsonParse(str, fallback = null) {
  try { return JSON.parse(str); } catch { return fallback; }
}
function safeJsonStringify(val, fallback = '') {
  try { return JSON.stringify(val); } catch { return fallback; }
}
module.exports = { safeJsonParse, safeJsonStringify };
