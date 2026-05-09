const vals = [
  [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],
  [50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
];

/**
 * Convert an integer (1-3999) to Roman numeral string.
 */
function toRoman(n) {
  let result = '';
  for (const [val, sym] of vals) { while (n >= val) { result += sym; n -= val; } }
  return result;
}

/**
 * Convert a Roman numeral string to an integer.
 */
function fromRoman(str) {
  const map = { I:1,V:5,X:10,L:50,C:100,D:500,M:1000 };
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const cur = map[str[i]], next = map[str[i+1]];
    total += (next > cur) ? -cur : cur;
  }
  return total;
}

module.exports = { toRoman, fromRoman };
