const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = [];
  let result = [];

  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes')) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition.push(String(options.addition));
      }
    } else {
      addition.push(String(options.addition));
    }
  }

  if (options.hasOwnProperty('additionSeparator')) {
    addition = addition.join(options.additionSeparator);
  } else {
    addition = addition.join('|');
  }

  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(str + addition);
    }
  } else {
    result.push(str + addition);
  }

  if (options.hasOwnProperty('separator')) {
    return result.join(options.separator)
  } else {
    return result.join('+');
  }

}

module.exports = {
  repeater
};
