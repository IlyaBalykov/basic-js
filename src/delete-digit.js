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
  let arr = []
  let str = String(n)
  for (let i = 0; i < str.length; i++) {
    str = str.replace(str[i], "")
    arr.push(str)
    str = String(n)
  }
  return Math.max(...arr)
}


module.exports = {
  deleteDigit
};
