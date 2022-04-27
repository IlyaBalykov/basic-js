const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  domains.forEach((e, i) => {
    let reversed = e
      .split(".")
      .reverse()
      .map(e => "." + e);

    for(let j = 0; j < reversed.length; j++) {
      let currentDomain = reversed
        .slice(0, j+1)
        .join("")

      if(obj[currentDomain]) {
        obj[currentDomain]++
      } else {
        obj[currentDomain] = 1
      }
    }
  })

  return obj
}

module.exports = {
  getDNSStats
};
