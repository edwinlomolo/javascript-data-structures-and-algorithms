// Heap sort algorithm helper methods

const swap = require("../Sorting algorithms/swap");

const heapify = (array, heapSize, i) => {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let largest = i;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, heapSize, largest);
  }
};

const buildHeap = array => {
  const arrSort = array;
  const heapSize = arrSort.length;
  for (let i = Math.floor(arrSort.length / 2); i >= 0; i -= 1) {
    heapify(arrSort, heapSize, i);
  }
};

module.exports = {
  buildHeap,
  heapify,
};
