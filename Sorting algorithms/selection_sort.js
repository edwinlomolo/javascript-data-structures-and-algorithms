/**
 * Selection sort algorithm definition

 * Selection sort algorithm is an in-place comparison algorithm
 * The general idea of the selection sort is to find the minimum
 * value in the data structure, place it in the first position,
 * then find the minimum second value, place it in the second position
 * and so on
 */

const swap = require("../utils/Sorting algorithms/swap");

const selectionSort = array => {
  const arrSort = array;
  let indexMin;
  for (let i = 0; i < arrSort.length - 1; i += 1) {
    indexMin = i;
    for (let j = indexMin; j < arrSort.length; j += 1) {
      if (arrSort[indexMin] > arrSort[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(i, indexMin);
    }
  }
  return arrSort;
};

module.exports = selectionSort;
