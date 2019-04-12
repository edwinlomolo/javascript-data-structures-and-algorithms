// Node class helper for tree data structure definition

class Node {
  constructor(key) {
    this.key = key; // Hold the node element
    this.left = null;
    this.right = null;
  }
}

// Insert key helper function definition
const insertNode = (node, newNode) => {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    }
    insertNode(node.left, newNode);
  }
  if (node.right === null) {
    node.right = newNode;
  }
  insertNode(node.right, newNode);
};

// inOrderTraverseNode helper function
const inOrderTraverseNode = (node, cb) => {
  if (node !== null) {
    inOrderTraverseNode(node.left, cb);
    cb(node.key);
    inOrderTraverseNode(node.right, cb);
  }
};

const preOrderTraverseNode = (node, cb) => {
  if (node !== null) {
    cb(node.key);
    preOrderTraverseNode(node.left, cb);
    preOrderTraverseNode(node.right, cb);
  }
};

const postOrderTraverseNode = (node, cb) => {
  if (node !== null) {
    postOrderTraverseNode(node.left, cb);
    postOrderTraverseNode(node.right, cb);
    cb(node.key);
  }
};

module.exports = {
  Node,
  insertNode,
  inOrderTraverseNode,
  preOrderTraverseNode,
  postOrderTraverseNode,
};
