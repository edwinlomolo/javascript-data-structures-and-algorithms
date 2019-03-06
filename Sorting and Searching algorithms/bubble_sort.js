/**
 * Bubble sort algorithm is one of the simplest
 * and one of the worst-case sorting algorithm
 * with respect to runtime

 * Bubble sort algorithm compares every two adjacent
 * items and swaps them if the first one is bigger than
 * the second one
 */

const swap = require("../utils/Sorting and searching algorithms/swap");

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

module.exports = bubbleSort;
