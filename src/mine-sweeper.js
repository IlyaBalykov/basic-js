const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let newArr = [
  //   [true, false, false],
  //   [false, true, false],
  //   [false, false, false]
  // ]
  //
  // let mineCount = 0
  //
  // for(let row = 0; row < 3; row++) {
  //   for(let column = 0; column < matrix[0].length; column++) {
  //     if(matrix[row][column+1] === true) {mineCount++}
  //     if(row < matrix.length-1) {
  //       if(matrix[row+1][column] && (matrix[row+1][column] === true)) {mineCount++}
  //       if(matrix[row+1][column+1] && (matrix[row+1][column+1] === true)) {mineCount++}
  //     }
  //
  //     if (row > 0) {
  //       if(matrix[row-1][column] && (matrix[row-1][column] === true)) {mineCount++}
  //       if(matrix[row-1][column+1] && (matrix[row-1][column+1] === true)) {mineCount++}
  //     }
  //
  //     if(column > 0) {
  //       if(matrix[row][column-1] === true) {mineCount++}
  //       if(row < matrix.length-1) {
  //         if(matrix[row+1][column-1] && (matrix[row+1][column-1] === true)) {mineCount++}
  //       }
  //
  //       if (row > 0) {
  //         if(matrix[row-1][column-1] && (matrix[row-1][column-1]=== true)) {mineCount++}
  //       }
  //     }
  //
  //     newArr[row].splice(column, 1, mineCount)
  //     mineCount = 0
  //   }
  // }
  // return newArr
}

module.exports = {
  minesweeper
};
