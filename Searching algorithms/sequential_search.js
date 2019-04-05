/**
 * The sequential or linear search is the most common basic search algorithm.
 * It is also the most inefficient one
 */

const sequentialSearch = (item, items) => {
  for (let i = 0; i < items.length; i += 1) {
    if (item === items[i]) {
      return i; // Return index of the item or you can return the item itself
    }
  }
  return -1; // If item is not found in items list
};

module.exports = sequentialSearch;
