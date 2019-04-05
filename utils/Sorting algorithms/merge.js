// Merge sort helper methods

const merge = (left, right) => {
  const result = [];
  let ir = 0;
  let il = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il += 1]);
    } else {
      result.push(right[ir += 1]);
    }
  }

  while (il < left.length) {
    result.push(left[il += 1]);
  }

  while (ir < right.length) {
    result.push(right[ir += 1]);
  }

  return result;
};

const mergeSortRec = array => {
  const sortArray = array;

  if (sortArray.length === 1) {
    return sortArray;
  }

  const mid = Math.floor(sortArray.length / 2);
  const left = sortArray.slice(0, mid);
  const right = sortArray.slice(mid, sortArray.length);

  merge(mergeSortRec(left), mergeSortRec(right));

  return sortArray;
};

module.exports = mergeSortRec;
