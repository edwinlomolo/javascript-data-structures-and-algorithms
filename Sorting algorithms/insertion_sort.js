/**
 * Insertion sort algorithm
 *
 * The insertion sort algorithm builds the final sorted array one item at a time
 *
 * It assumes that the first item is already sorted. A comparison with the second
 * item is performed. Should the second item stay in its place or be inserted before
 * the first item?
 *
 * So the first two items will be sorted, the comparison will take place with the
 * third item(that is, should it be inserted in the first, second, or third position?),
 * and so on.
 */

const insertionSort = array => {
  const arrSort = array;
  let j;
  let temp;
  for (let i = 1; i < arrSort.length; i += 1) {
    j = i;
    temp = arrSort[i];

    while (j > 0 && arrSort[j - 1] > temp) {
      arrSort[j] = arrSort[j - 1];
      j -= 1;
    }
    arrSort[j] = temp;
  }
  return arrSort;
};

module.exports = insertionSort;
