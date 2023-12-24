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

  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let res;
  let additionSeparator = options.additionSeparator || '|';
  let arr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  res = Array(repeatTimes).fill(str + arr).join(separator)
  return res

}

module.exports = {
  repeater
};
