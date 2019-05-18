// Queue class definition

class Queue {
  constructor() {
    this.items = []; // Holds our queue items
  }

  enqueue(element) {
    // This add new element at the back of our queue
    this.items.push(element);
  }

  dequeue() {
    // This removes the first item in the queue(also returns the dequeued item)
    return this.items.shift();
  }

  front() {
    // This returns the first item from the queue
    return this.items[0];
  }

  isEmpty() {
    // This returns true if the queue is empty or false otherwise
    return this.items.length === 0;
  }

  size() {
    // This returns the number of elements in the queue
    return this.items.length;
  }

  clear() {
    // This clear/resets the queue
    this.items = [];
  }
}

module.exports = Queue;
