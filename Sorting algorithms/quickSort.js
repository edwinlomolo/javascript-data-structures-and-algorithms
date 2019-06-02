/**
 * Quick sort is probably the most used sorting algorithm.
 * Quick sort has a complexity of O(n log n), and it usually performs
 * faster than the O(n log n) sorting algorithms.
 * Simillar to the merge sort algorithm, Quick sort also uses the
 * divide-and-conquer approach, dividing the original array into smaller
 * ones(but not splitting them as the merge sort does) to do the sorting.
 *
 * We need to select an item from the array, called the pivot, which is the
 * middle item in the array.
 *
 * We create two pointers- the left-hand side one will point to the first
 * item in the array, and the right-hand side will point to the last item of the
 * array.
 *
 * We move the left-hand pointer until we find an item that is bigger than the
 * pivot, and also move the right-hand pointer untill we find an item that is less
 * than the pivot and swap them. We repeat the process until the left-hand pointer
 * passes the right-hand pointer. This process helps to have values lower than the
 * pivot before the pivot and values greater than the pivot after the pivot. This
 * is the partition operation.
 *
 * Next, the algorithm repeats the previous two steps for smaller arrays(subarrays
 * with smaller values and then subarrays with greater values) until the arrays are
 * completely sorted.
 */

const quick = require("../utils/Sorting algorithms/quick");

const quickSort = array => {
  const sortArray = quick(array, 0, array.length - 1);

  return sortArray;
};

module.exports = quickSort;
