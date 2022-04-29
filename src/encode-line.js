const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1
  let encode = ""
  for(let i = 0; i<str.length; i++) {
    if(str[i+1] === str[i]) {
      count++
    } else {
      encode += count + str[i]
      count = 1
    }
  }
  return encode.replace(/1/g, "")
}

module.exports = {
  encodeLine
};
