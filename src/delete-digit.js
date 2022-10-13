const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = String(n);
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s.slice(0, i) + s.slice(i + 1));
  }

  return Number(arr.sort((a, b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};
