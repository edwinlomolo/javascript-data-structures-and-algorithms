// Linked list data structure definition

const Node = require("../utils/linked_list_node");

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

  insert(position, element) {
    // This inserts a new item at a specified position in the list
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
  }

  indexOf(element) {
    // This returns the index of an item in the list. If item not found, it returns -1
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
  }

  getHead() {
    // This returns the head
    return this.head;
  }
}

module.exports = LinkedList;
