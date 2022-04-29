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

  constructor(count) {
    this.newcount = 1
    this.count = 1;
  }

  calculateDepth(arr) {
    for (let element of arr) {
      if(Array.isArray(element)) {
        this.newcount++
        return this.calculateDepth(element)
      }
      if(this.newcount > this.count) {
        this.count = this.newcount
      }
    }
    return this.count
  }
}

module.exports = {
  DepthCalculator
};
