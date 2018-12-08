// Stack data structure test drive

const Stack = require("../../Stacks/stack");
const expect = require("expect.js");

describe("Interacting with stack data structure", () => {
  it("Should be able to create a new stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).to.be(true);
    expect(stack.size()).to.be.equal(0);
  });
});
