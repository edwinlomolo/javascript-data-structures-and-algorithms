// Test cases and implementation of binary tree data structure

const expect = require("expect.js");
const BinaryTree = require("../../Trees");
let binaryTree;

// Hook
beforeEach(() => {
  binaryTree = new BinaryTree();
});

// Test cases
describe("BINARY TREE DATA STRUCTURE", () => {
  it("Should be able to initialize a new tree data structure", () => {
    expect(binaryTree.getRoot()).to.be(null); // The root should be null
  });
  it("Should be able to add a new element to the binary tree", () => {
    binaryTree.insert(11);
    expect(binaryTree.search(11)).to.be(true);
  });
  it("Should be able to search for a value in a binary tree", () => {
    expect(binaryTree.search(20)).to.be(false); // Since 20 is not in the tree
    binaryTree.insert(20);
    expect(binaryTree.search(20)).to.be(true); // Since 20 is inserted in the tree
  });
  it("Should be able to get the minimum value in a binary tree" , () => {
    binaryTree.insert(11);
    binaryTree.insert(7);
    binaryTree.insert(15);
    expect(binaryTree.min()).to.be.equal(7);
  });
  it("Should be able to get the maximum value in a binary tree", () => {
    binaryTree.insert(11);
    binaryTree.insert(7);
    binaryTree.insert(15);
    expect(binaryTree.max()).to.be.equal(15);
  });
  it("Should be able to remove a node or leaf from the binary tree", () => {
    binaryTree.insert(11);
    binaryTree.insert(7);
    binaryTree.insert(15);
    binaryTree.remove(15); // Remove 15 from the tree
    expect(binaryTree.search(15)).to.be(false);
    binaryTree.remove(7);
    expect(binaryTree.search(7)).to.be(false);
    binaryTree.remove(11);
    expect(binaryTree.search(11)).to.be(false);
  });
});
