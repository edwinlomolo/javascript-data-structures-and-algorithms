// Set data structure implementation

const expect = require("expect.js");
const Set = require("../../Sets/set");

let set;

// Hook
before(() => {
  set = new Set();
});

describe("Interacting with set data structure", () => {
  it("Should be able to create/initialize a new set", () => {
    expect(set.size()).to.be.equal(0);
  });
});
