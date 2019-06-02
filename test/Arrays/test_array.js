// Test cases for arrays

const expect = require("expect.js");

// Hook
beforeEach(() => {
  let numbers;
});

describe("ARRAY DATA STRUCTURE", () => {
  it("Should be able to initialize an array using new constructor", () => {
    numbers = new Array();
    expect(numbers.length).to.be.equal(0);
    expect(Array.isArray(numbers)).to.be(true);
  });
  it("Should be able to initialize an array with new constructor and of length 10", () => {
    const numbers = new Array(10);
    expect(Array.isArray(numbers)).to.be(true);
    expect(numbers.length).to.be.equal(10);
  });
  it("Should be able to initialize an array using square brackets", () => {
    const numbers = [];
    expect(Array.isArray(numbers)).to.be(true);
    expect(numbers.length).to.be.equal(0);
  });
  it("Should be able to access an item in an array", () => {
    const expected = [10, 20];
    const current = [10, 20];
    expect(current[0] === 10); // Access first item
    expect(current[1] === 20); // Access second item
    for (let i = 0; i < current.length; i += 1) {
      expect(current[i]).to.be.equal(expected[i]);
    }
  });
  it("Should be able to add 30 in the last position", () => {
    numbers = [10, 20];
    numbers.push(30); // Add 30 to numbers array
    expect(numbers.length).to.be.equal(3); // Numbers array should have 3 elements
    expect(numbers[2]).to.be.equal(30); // Third element should be 30
  });
  it("Should be able to add 0 in the first position", () => {
    numbers.unshift(0);
    expect(numbers.length).to.be.equal(4); // Numbers array to have 4 items
    expect(numbers[0]).to.be.equal(0); // First item to be 0
  });
  it("Should be able to remove element in the first position", () => {
    numbers = [0, 10, 20, 30];
    numbers.shift();
    expect(numbers.length).to.be.equal(3); // Numbers to have 3 items
    expect(numbers[0]).not.to.equal(0); // Cannot access previous first element
  });
  it("Should be able to remove element from the last position", () => {
    numbers.pop();
    expect(numbers.length).to.be.equal(2);
    expect(numbers[3]).not.to.equal(30);
  });
  it("Should be able to remove element(s) from a specific position", () => {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.splice(1, 2); // Remove 2 elements starting from position 1
    expect(numbers.length).to.be.equal(8);
    expect(numbers[1]).not.to.equal(1); // Should not be accessible
    expect(numbers[2]).not.to.equal(2); // Should not be accessible
  });
  it("Should be able to add element(s) at a specific position", () => {
    numbers.splice(1, 0, 1, 2);
    expect(numbers.length).to.be.equal(10); // Should have 10 elements
    expect(numbers[1]).to.be.equal(1); // Should have 1 as second element in array
    expect(numbers[2]).to.be.equal(2); // Should have 2 as third element in array
  });
});
