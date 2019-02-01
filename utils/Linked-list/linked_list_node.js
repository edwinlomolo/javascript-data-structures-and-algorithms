/**
 * Node helper class represent the item we want to add to the list
 * The Node contains an element attribute, which is the value that we want to add to the list,
 * and a next attribute which is the pointer that contains the link to the next node item of the
 * list
 */

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

module.exports = Node;
