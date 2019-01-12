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
  it("Should be able to add new item to the set", () => {
    set.add(1);
    set.add(2);
    set.add(3);
    expect(set.size()).to.be.equal(3);
    expect(set.has(1)).to.be(true);
    expect(set.has(2)).to.be(true);
    expect(set.has(3)).to.be(true);
  });
  it("Should be able to check if a value exists in a set", () => {
    expect(set.has(1)).to.be(true);
    expect(set.has(4)).to.be(false);
  });
  it("Should be able to delete a value from the set", () => {
    set.delete(3);
    expect(set.has(3)).to.be(false);
    expect(set.size()).to.be.equal(2);
  });
  it("Should be able to know how many elements the set contains", () => {
    expect(set.size()).to.be.equal(2);
  });
  it("Should be able to get the values in a set", () => {
    const values = set.values();
    expect(values.length).to.be.equal(2);
  });
  it("Should be able to clear the set", () => {
    set.clear();
    expect(set.size()).to.be.equal(0);
  });
});
