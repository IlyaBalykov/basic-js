const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let reg = new RegExp("'--discard-next'|'--discard-prev'|'--double-next'|'--double-prev'")
  let newArr = []
  if(Array.isArray(arr)) {
    for (let count = 0; count < arr.length; count++) {
      if (arr[count] === '--discard-next') {
        if(count !==arr.length-1) {
          count+=2
        }
      } else if (arr[count] === '--discard-prev') {
        if(count !==0) {
          newArr.splice(count - 1, 1)
        }
      } else if (arr[count] === '--double-next') {
        if(count !==arr.length-1) {
          newArr.push(arr[count+1])
        }

      } else if (arr[count] === '--double-prev') {
        if(count !==0) {
          newArr.splice(count - 1, 0, arr[count - 1])
        }

      } else {
        newArr.push(arr[count])
      }
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  return newArr
}

module.exports = {
  transform
};
