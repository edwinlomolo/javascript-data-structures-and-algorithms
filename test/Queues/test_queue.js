// Queue data structure class implementation

const Queue = require("../../Queues/queue");
const expect = require("expect.js");

let queue;

describe("Interacting with Queue data structure", () => {
  it("Should be able to create/initialize a new queue", () => {
    queue = new Queue();
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
});
