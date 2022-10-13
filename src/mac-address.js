const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  let result = true;

  arr.forEach(elem => {
    if ('0123456789ABCDEF'.indexOf(elem[0]) === -1 || '0123456789ABCDEF'.indexOf(elem[1]) === -1) {
      result = false;
    }
  })
  return result;
}

module.exports = {
  isMAC48Address
};
