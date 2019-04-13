// Test cases and implementation of binary tree data structure

const expect = require("expect.js");
const BinaryTree = require("../../Trees/tree");
let binaryTree;

// Hook
beforeEach(() => {
  binaryTree = new BinaryTree();
});

// Test cases
describe("Interacting with Binary Tree data structure", () => {
  it("Should be able to initialize a new tree data structure", () => {
    expect(binaryTree.getRoot()).to.be(null);
  });
  it("Should be able to add a new element to the binary tree", () => {
    binaryTree.insert(11);
    expect(binaryTree.search(11)).to.be(true);
    binaryTree.insert(7);
    expect(binaryTree.search(7)).to.be(true);
    binaryTree.insert(15);
    binaryTree.insert(5);
    binaryTree.insert(3);
    binaryTree.insert(9);
    binaryTree.insert(8);
    binaryTree.insert(10);
    binaryTree.insert(13);
    binaryTree.insert(12);
    binaryTree.insert(14);
    binaryTree.insert(20);
    binaryTree.insert(18);
    binaryTree.insert(25);
  });
});
