/**
 * Bubble sort algorithm is one of the simplest
 * and one of the worst-case sorting algorithm
 * with respect to runtime

 * Bubble sort algorithm compares every two adjacent
 * items and swaps them if the first one is bigger than
 * the second one
 */

const swap = require("../utils/Sorting algorithms/swap");

const bubbleSort = array => {
  const arrSort = array;
  for (let i = 0; i < arrSort.length; i += 1) {
    for (let j = 0; j < arrSort.length - 1; j += 1) {
      if (arrSort[j] > arrSort[j + 1]) {
        swap(arrSort, j, j + 1);
      }
    }
  }
  return arrSort;
};

module.exports = bubbleSort;
