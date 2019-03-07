/**
 * Selection sort algorithm definition

 * Selection sort algorithm is an in-place comparison algorithm
 * The general idea of the selection sort is to find the minimum
 * value in the data structure, place it in the first position,
 * then find the minimum second value, place it in the second position
 * and so on
 */

const swap = require("../utils/Sorting and searching algorithms/swap");

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    let indexMin = i;
    for (let j = indexMin; j < array.length; j += 1) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(i, indexMin);
    }
  }
};

module.exports = selectionSort;
