// Dictionary class implementation(test-cases)

const Dictionary = require("../../Dictionaries/dictionary");
const expect = require("expect.js");

let dict;

// Hook
before(() => {
  dict = new Dictionary();
});

describe("Interacting with dictionary data structure", () => {
  it("Should be able to create/initialize a new dictionary", () => {
    expect(dict.size()).to.be.equal(0);    
  });
});
