// Stack data structure test drive

const Stack = require("../../Stacks");
const expect = require("expect.js");

let stack;

describe("STACK DATA STRUCTURE", () => {
  it("Should be able to create a new stack", () => {
    stack = new Stack();
    expect(stack.isEmpty()).to.be(true);
    expect(stack.size()).to.be.equal(0);
  });
  it("Should be able to add elements to the stack", () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).to.be(false);
    expect(stack.size()).not.to.equal(0);
    expect(stack.size()).to.be.equal(3);
  });
  it("Should be able to remove elements from the top of the stack", () => {
    stack.pop();
    expect(stack.peek()).not.to.equal(2);
    expect(stack.size()).not.to.equal(3);
    expect(stack.size()).to.be.equal(2);
  });
  it("Should be able to know the top item in the stack", () => {
    const topElement = stack.peek();
    expect(topElement).to.be.equal(1);
  });
  it("Should be able to check if the stack is empty", () => {
    expect(stack.isEmpty()).not.to.be(true);
    expect(stack.isEmpty()).to.be(false);
  });
  it("Should be able to know the number of items in the stack", () => {
    expect(stack.size()).to.be.equal(2);
  });
  it("Should be able to clear/reset the stack", () => {
    stack.clear();
    expect(stack.isEmpty()).to.be(true);
    expect(stack.size()).to.be.equal(0);
  });
});
