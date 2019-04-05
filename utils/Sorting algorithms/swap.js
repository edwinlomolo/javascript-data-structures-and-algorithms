// Swap helper function

function swap(array, index1, index2) {
  const arr = array;
  const aux = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = aux;
}

module.exports = swap;
