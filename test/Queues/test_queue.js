// Queue data structure class implementation

const Queue = require("../../Queues");
const expect = require("expect.js");

let queue;

// Hook
before(() => {
  queue = new Queue();
})

describe("QUEUE DATA STRUCTURE", () => {
  it("Should be able to create/initialize a new queue", () => {
    expect(queue.isEmpty()).to.be(true);
    expect(queue.size()).to.be.equal(0);
  });
  it("Should be able add new elements to the queue", () => {
    queue.enqueue("Mary");
    queue.enqueue("John");
    queue.enqueue("Peterson");
    expect(queue.isEmpty()).to.be(false);
    expect(queue.size()).to.be.equal(3);
  });
  it("Should be able to remove the first element from the queue(dequeue)", () => {
    queue.dequeue();
    expect(queue.size()).to.be.equal(2);
    expect(queue.front()).not.to.be.equal("Mary");
  });
  it("Should be able to view the first element in the queue", () => {
    const numberOne = queue.front();
    expect(numberOne).to.be.equal("John");
  });
  it("Should be able to check if the queue is empty", () => {
    expect(queue.isEmpty()).to.be(false);
  });
  it("Should be able to check the number of elements the queue contains", () => {
    expect(queue.size()).to.be.equal(2);
  });
  it("Should be able to clear/reset the queue", () => {
    queue.clear();
    expect(queue.isEmpty()).to.be(true);
    expect(queue.size()).to.be.equal(0);
  });
});
