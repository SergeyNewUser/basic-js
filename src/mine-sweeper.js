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

  const dlin2 = matrix[0].length;
  const dlin = matrix.length;
  let field = [];

  for (let i = 0; i < dlin; i++) {
    field[i] = [];
    for (let j = 0; j < dlin2; j++) {
      const iStart = i === 0 ? 0 : i - 1;
      const jStart = j === 0 ? 0 : j - 1;
      const iEnd = i === dlin - 1 ? i : i + 1;
      const jEnd = j === dlin2 - 1 ? j : j + 1;
      let res = 0;

      for (let sk = iStart; sk <= iEnd; sk++) {
        for (let lk = jStart; lk <= jEnd; lk++) {
          if (!(sk === i && lk === j)) {
            if (matrix[sk][lk]) res++;
          }
        }
      }
      field[i].push(res);
    }
  }
  return field
}

module.exports = {
  minesweeper
};
