// Test cases for bubble sort algorithm implementation

const bubbleSort = require("../../Sorting and Searching algorithms/bubble_sort");
const selectionSort = require("../../Sorting and Searching algorithms/selection_sort");
const expect = require("expect.js");

const items = [12, 10, 23, 40, 40, 42, 2, 9];
const expected = [2, 9, 10, 12, 23, 40, 40, 42];
let sortedArray;

describe("Implementing sorting algorithms", () => {
  it("Should be able to perform a sort using bubble sort algorithm", () => {
    sortedArray = bubbleSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  it("Should be able to perform a sort using selection sort algorithm", () => {
    sortedArray = selectionSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
});