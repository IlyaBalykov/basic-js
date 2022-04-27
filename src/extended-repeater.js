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
  let repAdd = ""
  let repeated = ""
  if(options.repeatTimes) {
    for(let count = 0; count < (options.repeatTimes || 1); count++){
      if(options.additionRepeatTimes) {
        for(let count = 0; count < options.additionRepeatTimes; count++) {
          (count === options.additionRepeatTimes - 1)
            ? repAdd += options.addition
            : repAdd += options.addition + (options.additionSeparator || "|")
        }
      } else if (options.repeatTimes && options.addition) {
        repAdd = options.addition
      }

      (count === options.repeatTimes - 1)
        ? repeated += str + repAdd
        : repeated += str + repAdd + (options.separator || "+")

      repAdd = ""
    }
  } else {
    if(options.additionRepeatTimes) {
      for(let count = 0; count < options.additionRepeatTimes; count++) {
        (count === options.additionRepeatTimes - 1)
          ? repAdd += options.addition
          : repAdd += options.addition + (options.additionSeparator || "|")
      }
    }

    repeated += str + options.addition + repAdd
  }
  return repeated
}

module.exports = {
  repeater
};
