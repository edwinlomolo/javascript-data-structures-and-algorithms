/**
 * Heap sort algorithm is another efficient sorting algorithm.
 * It performs the sorting as if it were a binary tree. To perform a heap
 * sort, we need to manage the array as a binary tree.
 */

const { buildHeap } = require("../utils/Sorting algorithms/heap");
const { heapify } = require("../utils/Sorting algorithms/heap");
const swap = require("../utils/Sorting algorithms/swap");

const heapSort = array => {
  const arrSort = array;
  let heapSize = arrSort.length;
  buildHeap(arrSort);

  while (heapSize > 1) {
    heapSize -= 1;
    swap(arrSort, 0, heapSize);
    heapify(arrSort, heapSize, 0);
  }
  return arrSort;
};

module.exports = heapSort;
