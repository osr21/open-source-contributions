/**
 * Escape special regex characters in a string so it can be used in a RegExp.
 * regexEscape('1+1=2') => '1\+1=2'
 */
const SPECIAL = new Set(['.','*','+','?','^','$','{','}','(',')',  '|','[',']','\\']);
function regexEscape(str) {
  return [...str].map(c => SPECIAL.has(c) ? '\\' + c : c).join('');
}

/**
 * Build a RegExp from a string, safely escaping it.
 */
function makeRegex(str, flags = '') {
  return new RegExp(regexEscape(str), flags);
}

module.exports = { regexEscape, makeRegex };
