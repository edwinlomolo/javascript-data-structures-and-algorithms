// Test cases for arrays

const expect = require("expect");

describe("Creating and initializing an array", () => {
  it("Should be able to initialize an array using new constructor", () => {
    const numbers = new Array();
    expect(numbers.length === 0);
    expect(Array.isArray(numbers) === true);
  });
  it("Should be able to initialize an array with new constructor and of length 10", () => {
    const numbers = new Array(10);
    expect(Array.isArray(numbers) === true);
    expect(numbers.length === 10);
  });
  it("Should be able to initialize an array using square brackets", () => {
    const numbers = [];
    expect(Array.isArray(numbers));
    expect(numbers.length === 0);
  });
});

describe("Accessing elements and iterating an array", () => {
  let expected = [10,20];
  it("Should be able to access an item in an array", () => {
    const numbers = [10,20];
    expect(numbers[0] === 10); // Access first item
    expect(numbers[1] === 20);; // Access second item
    for(let i = 0; i < numbers.length; i+=1) {
      expect(numbers[i] === expected[i]);
    }
  });
});

describe("Adding elements to an array", () => {
  let numbers = [10, 20];
  it("Should be able to add 30 in the last position", () => {
    numbers.push(30); // Add 30 to numbers array
    expect(numbers.length === 3); // Numbers array should have 3 elements
    expect(numbers[2] === 30); // Third element should be 30
  });
  it("Should be able to add 0 in the first position", () => {
    numbers.unshift(0);
    expect(numbers.length === 4); // Numbers array to have 4 items
    expect(numbers[0] === 0); // First item to be 0
  });
});

describe("Removing elements from an array", () => {
  let numbers = [0,10,20,30];
  it("Should be able to remove element in the first position", () => {
    numbers.shift();
    expect(numbers.length === 3); // Numbers to have 3 items
    expect(numbers[0] !== 0); // Cannot access previous first element
  });
  it("Should be able to remove element from the last position", () => {
    numbers.pop();
    expect(numbers.length === 2);
    expect(numbers[3] !== 30);
  });
});

describe("Adding and removing elements from a specific position", () => {
  let numbers = [0,1,2,3,4,5,6,7,8,9];
  it("Should be able to remove element(s) from a specific position", () => {
    numbers.splice(1,2); // Remove 2 elements starting from position 1
    expect(numbers.length === 8);
    expect(numbers[1] !== 1); // Should not be accessible
    expect(numbers[2] !== 2); // Should not be accessible
  });
  it("Should be able to add element(s) at a specific position", () => {
    numbers.splice(1,0,1,2);
    expect(numbers.length === 10); // Should have 10 elements
    expect(numbers[1] === 1); // Should have 1 as second element in array
    expect(numbers[2] === 2); // Should have 2 as third element in array
  });
});
