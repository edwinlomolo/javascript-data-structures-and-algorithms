// Linked list data structure implementations

const expect = require("expect.js");
const LinkedList = require("../../Linked-List/linked_list");

let linkedList;

// Hook
before(() => {
  linkedList = new LinkedList();
})

describe("Interacting with Linked list data structure", () => {
  it("Should be able to create/initialise a linked list", () => {
    expect(linkedList.size()).to.be.equal(0);
    expect(linkedList.isEmpty()).to.be(true);
  });
  it("Should be able to add new elements to the linked list", () => {
    linkedList.append("Mary");
    linkedList.append("John");
    linkedList.append("Mike");
    expect(linkedList.size()).to.be.equal(3);
    expect(linkedList.isEmpty()).to.not.be(true);
    expect(linkedList.isEmpty()).to.be(false);
  });
})
