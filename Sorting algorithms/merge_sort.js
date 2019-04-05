/**
 * Merge sort algorithm
 *
 * The merge sort algorithm is first sorting algorithm that can
 * be used in the real world
 *
 * Bubble sort, Selection sort, and the insertion sort do not give
 * good performance, but the merge sort gives a good performance with
 * a complexity of O(n log n)
 *
 * The merge sort is a divide-and-conquer algorithm. The idea behind
 * it is to divide the original array into smaller arrays until each
 * smaller array has one position and then merge these smallers arrays
 * into bigger ones until we have one big sorted array
 *
 */

const mergeSortRec = require("../utils/Sorting algorithms/merge");

const mergeSort = array => {
  const arrSorted = mergeSortRec(array);

  return arrSorted;
};

module.exports = mergeSort;
