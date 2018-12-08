// Stack data structure test drive

const Stack = require("../../Stacks/stack");
const expect = require("expect.js");

let stack;

describe("Interacting with stack data structure", () => {
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
});
