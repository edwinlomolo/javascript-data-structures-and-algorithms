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
      /* eslint-disable */
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      /* eslint-disable */
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
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

const minNode = node => {
  if (node) {
    while (node && node.left !== null) { // Traverse the left node
      /* eslint-disable */
      node = node.left; // Traverse the left node
    }
    return node.key;
  }
  return null;
};

const maxNode = node => {
  if (node) {
    while (node && node.right !== null) {
      /* eslint-disable */
      node = node.right;
    }
    return node.key;
  }
  return null;
};

const searchNode = (node, key) => {
  if (node === null) {
    return false;
  }
  if (key < node.key) {
    return searchNode(node.left, key);
  } else if (key > node.key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
};

const findMinNode = node => {
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
};

const removeNode = (node, key) => {
  if (node === null) {
    return null;
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  } else { // Key is equal to the node
    // Case 1 - a leaf node
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // Case 2 - a node with only 1 child
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    // Case 3 - a node with 2 children
    const aux = findMinNode(node.right);
    node.key = aux.key;
    node.right = removeNode(node.right, aux.key);
    return node;
  }
};

module.exports = {
  Node,
  insertNode,
  inOrderTraverseNode,
  preOrderTraverseNode,
  postOrderTraverseNode,
  minNode,
  maxNode,
  searchNode,
  removeNode,
};
