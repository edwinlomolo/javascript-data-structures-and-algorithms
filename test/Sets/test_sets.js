// Set data structure implementation

const expect = require("expect.js");
const Set = require("../../Sets");

let set;

// Hook
before(() => {
  set = new Set();
});

describe("SET DATA STRUCTURE", () => {
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
  it("Should be able to perform set union operation", () => {
    set.add(1);
    set.add(2);
    set.add(3);
    const setB = new Set();
    setB.add(3);
    setB.add(4);
    setB.add(5);
    setB.add(6);
    const union = set.union(setB);
    const setValues = union.values();
    const expected = [1,2,3,4,5,6];
    for (let i = 0; i < setValues.length; i += 1) {
      expect(setValues[i]).to.be.equal(expected[i]);
    }
  });
  it("Should be able to perform set intersecion operation", () => {
    const setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);
    const intersectSet = set.intersection(setB);
    const setValues = intersectSet.values();
    const expected = [2,3];
    for (let i = 0; i < setValues.length; i += 1) {
      expect(setValues[i]).to.be.equal(expected[i]);
    }
  });
  it("Should be able to perform set difference operation", () => {
    const setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);
    const differenceSet = set.difference(setB);
    const values = differenceSet.values();
    const expected = [1];
    for (let i = 0; i < values.length; i += 1) {
      expect(values[i]).to.be.equal(expected[i]);
    }
  });
  it("Should be able to perform set subset operation", () => {
    const setB = new Set();
    setB.add(1);
    setB.add(2);
    setB.add(3);
    setB.add(4);
    const setC = new Set();
    setC.add(4);
    setC.add(5);
    setC.add(6);
    setC.add(7);
    expect(set.subset(setB)).to.be(true);
    expect(set.subset(setC)).to.be(false);
  });
});
