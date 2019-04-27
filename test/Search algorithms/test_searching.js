// Searching algorithms implementation using test cases
const expect = require("expect.js");
const sequentialSearch = require("../../Searching algorithms/sequential_search");
const binarySearch = require("../../Searching algorithms/binary_search");

const data = [23, 12, 4, 42];

// Hook
beforeEach(() => {
  let index;
})

describe("SEARCHING ALGORITHMS", () => {
  it("Should be able to perform a search using the sequential search algorithm", () => {
    index = sequentialSearch(4, data);
    expect(data[index]).to.be.equal(4);
  });
  it("Should be able to handle a search for an item that is not in the list", () => {
    index = sequentialSearch(40, data);
    expect(data[index]).to.be(undefined);
  });
  it("Should be able to perform a search using the binary search algorithm", () => {
    index = binarySearch(42, data);
    expect(data[index]).to.be.equal(42);
  });
  it("Should be able to handle a search for an item that isn't in the list", () => {
    index = binarySearch(400, data);
    expect(data[index]).to.be(undefined);
  });
});