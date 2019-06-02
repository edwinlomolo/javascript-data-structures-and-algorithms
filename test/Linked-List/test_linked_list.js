// Linked list data structure implementations

const expect = require("expect.js");
const LinkedList = require("../../Linked-List");

let linkedList;

// Hook
before(() => {
  linkedList = new LinkedList();
})

describe("LINKED LIST DATA STRUCTURE", () => {
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
  it("Should be able to remove an element at any position", () => {
    linkedList.removeAt(0);
    expect(linkedList.size()).to.be.equal(2);
  });
  it("Should be able to remove any element that does not exist in the linked list", () => {
    const result = linkedList.removeAt(100);
    expect(result).to.be(null);
  });
  it("Should be able to remove any element from the linked list", () => {
    linkedList.remove("Mike");
    expect(linkedList.size()).to.be.equal(1);
    expect(linkedList.indexOf("Mike")).to.be.equal(-1);
  });
  it("Should be able to insert an element at any position", () => {
    linkedList.insert(1, "Mike");
    expect(linkedList.size()).to.be.equal(2);
  });
  it("Should be able to check if the list is empty", () => {
    expect(linkedList.isEmpty()).to.be(false);
  });
  it("Should be able to get the number of items the list contains", () => {
    expect(linkedList.size()).to.be.equal(2);
  });
  it("Should be able to get the head of the linked list", () => {
    const head = linkedList.getHead();
    expect(head.element).to.be.equal("Mike");
  });
})
