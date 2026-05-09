const esc = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' };
const unesc = Object.fromEntries(Object.entries(esc).map(([k,v])=>[v,k]));
function escapeHtml(str) { return str.replace(/[&<>"']/g, m => esc[m]); }
function unescapeHtml(str) { return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, m => unesc[m]); }
module.exports = { escapeHtml, unescapeHtml };
