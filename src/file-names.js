const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let copyArr = JSON.parse(JSON.stringify(names))
  let arr = JSON.parse(JSON.stringify(names))

  changeArr(arr)

  function changeArr(arr) {
    copyArr.forEach((e, i) => {
      let index = 1
      for (let count = i + 1; count < arr.length; count++) {
        if (e === arr[count]) {
          arr[count] += `(${index})`
          index++
        }
      }
    })
    copyArr = JSON.parse(JSON.stringify(arr))
  }

  if ((new Set(arr)).size !== arr.length) {
    changeArr(arr)
  }
  return arr
}

module.exports = {
  renameFiles
};
