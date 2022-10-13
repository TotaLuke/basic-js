const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    if (Array.isArray(arr)) {
      arr.forEach(elem => {
        if (Array.isArray(elem)) {
          let newCounter = this.calculateDepth(elem);
          if (counter < newCounter) {
            counter = newCounter;
          }
        }
      })
      return counter + 1;
    } else {
      return 0;
    }
  }
}

let obj = new DepthCalculator();

console.log(obj.calculateDepth([[[]]]));

module.exports = {
  DepthCalculator
};
