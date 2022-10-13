const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let buff = [];

  arr.forEach(elem => {
    if (elem !== -1) {
      buff.push(elem);
    }
  })

  buff.sort((a, b) => { return a - b; });

  while (buff.length > 0) {
    arr.forEach((elem, index) => {
      if (elem !== -1) {
        arr[index] = buff[0];
        buff.splice(0, 1);
      }
    })
  }
  return arr;
}

module.exports = {
  sortByHeight
};
