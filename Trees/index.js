// Binary tree data structure


const {
  Node,
  insertNode,
  inOrderTraverseNode,
  preOrderTraverseNode,
  postOrderTraverseNode,
  minNode,
  maxNode,
  searchNode,
  removeNode,
} = require("../utils/Tree");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a new key to the tree
  // We will use recursion heavily to insert a new key to the tree
  insert(key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  // Search for the specified key in the tree, returns true if found, otherwise returns false
  search(key) {
    return searchNode(this.root, key);
  }

  // Visits all the nodes of the tree using in-order traverse; from the smallest to the largest
  // inOrderTraverse receives a callback function that we want to execute when the node is visited,
  // this behaviour is known as visitor pattern
  // We can use the inOrderTraverse method to sort the BST data structure
  inOrderTraverse(cb) {
    inOrderTraverseNode(this.root, cb);
  }

  // Visits all the nodes of the tree using pre-order traverse
  // An application of the pre-order traversal would be to print a structured document.
  // Pre-order traversal visits the node prior to it's descendants.
  preOrderTraverse(cb) {
    preOrderTraverseNode(this.root, cb);
  }

  // Visits all the node of a tree using the post-order traversal
  // Visits the node after it visits its descendants. An applications
  // of a postOrderTraverse would be computing the space used by a file
  // in a directory and its descendants
  postOrderTraverse(cb) {
    postOrderTraverseNode(this.root, cb);
  }

  // Returns the min value/key in the tree
  min() {
    return minNode(this.root);
  }

  // Returns the max value/key in the tree
  max() {
    return maxNode(this.root);
  }

  // Get the root element in a binary tree data structure
  getRoot() {
    return this.root;
  }

  // Removes the key from the tree
  remove(key) {
    this.root = removeNode(this.root, key);
  }
}

module.exports = BinaryTree;
