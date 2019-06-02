// Linked list data structure definition

const Node = require("../utils/Linked-list");

class LinkedList {
  constructor() {
    this.head = null; // References the first node
    this.length = 0; // Stores the number of item we have on the list
  }

  append(element) {
    // This adds a new item to the end of the list
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      // Loop the list until find the last item
      while (current.next) {
        current = current.next;
      }

      // Get the last item and assign next to node to make the link
      current.next = node;
    }

    this.length += 1;
  }

  getElement(index) {
    // Returns the specified element if found in the linked list or undefined otherwise
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i += 1) { // Loop the node
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      if (position === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElement(position - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.length += 1;
      return true;
    }
    return false;
  }

  removeAt(position) {
    // This removes an item from a specified position in the list
    if (position > -1 && position < this.length) { // Check for out-of-bounds values
      let current = this.head;
      let previous;
      let index = 0;

      // Removing first item
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index += 1;
        }

        // Link previous with current's next: skip to remove
        previous.next = current.next;
      }
      this.length -= 1;

      return current.element; // Return removed element
    }
    return null;
  }

  remove(element) {
    // This removes an item from the list
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

  indexOf(element) {
    // This returns the index of an item in the list. If item not found, it returns -1
    let current = this.head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index += 1;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    // This returns true if the linked list does not contain any elements and false otherwise
    return this.length === 0;
  }

  size() {
    // This returns the number of items the linked list contains(similar to the length property)
    return this.length;
  }

  toString() {
    // Outputs only the element values
    let current = this.head;
    let string = "";

    while (current) {
      string += current.element + (current.next ? "n" : "");
      current = current.next;
    }
    return string;
  }

  getHead() {
    // This returns the head
    return this.head;
  }
}

module.exports = LinkedList;
