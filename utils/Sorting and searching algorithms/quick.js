// Quick sort algorithm helper methods

const swap = require("./swap");

const partition = (array, left, right) => {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i += 1;
    }
    while (array[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(array, i, j);
      i += 1;
      j -= 1;
    }
  }
  return i;
};

const quick = (array, left, right) => {
  const arrSort = array;
  let index;

  if (arrSort.length > 1) {
    index = partition(arrSort, left, right);
    if (left < index - 1) {
      quick(arrSort, left, index - 1);
    }

    if (index < right) {
      quick(arrSort, index, right);
    }
  }
  return arrSort;
};

module.exports = quick;
