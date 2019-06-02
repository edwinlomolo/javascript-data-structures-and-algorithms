/**
 * Binary search algorithm work similar to the number guessing game,
 * in which someone says "I'm thinking of a number between 1 and 100".
 * We will begin by responding with a number, and the person will say "higher",
 * "lower", or that we got it right.
 *
 * The data structure needs to be sorted inorder to perfom a binary search. Binary
 * search algorithm follows the following steps;
 *
 *  => A value is selected in the middle of the array
 *  => If the item is the one we are looking for, we are done(the value is right)
 *  => If the value we are looking for is less than the selected one, then we will
 *     go to the left and back to 1(lower)
 *  => If the value we are looking for is larger than the selected one, then we will
 *     go to the right and back(higher)
 */


const heapSort = require("../Sorting algorithms/heap_sort");

const binarySearch = (item, items) => {
  const arrSort = heapSort(items);

  let low = 0;
  let high = arrSort.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arrSort[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

module.exports = binarySearch;
