// Test cases for bubble sort algorithm implementation

const bubbleSort = require("../../Sorting and Searching algorithms/bubble_sort");
const selectionSort = require("../../Sorting and Searching algorithms/selection_sort");
const expect = require("expect.js");

const items = [12, 10, 23, 40];
const expected = [10, 12, 23, 40];

describe("Implementing sorting algorithms", () => {
  it("Should be able to perform a sort using bubble sort algorithm", () => {
    const sortedArray = bubbleSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  it("Should be able to perform a sort using selection sort algorithm", () => {
  })
});
