const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n
  let result
  function sum(number) {
    let sumDigit = String(number).split('').reduce((a, b) => +a + +b)
    if (String(sumDigit).length > 1) {
      sum(sumDigit)
    } else {
      result = sumDigit
    }
  }
  sum(number)
  return result
}

module.exports = {
  getSumOfDigits
};
