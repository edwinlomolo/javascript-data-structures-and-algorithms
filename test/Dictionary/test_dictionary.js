// Dictionary class implementation(test-cases)

const Dictionary = require("../../Dictionaries");
const expect = require("expect.js");

let dict;

// Hook
before(() => {
  dict = new Dictionary();
});

describe("DICTIONARY DATA STRUCTURE", () => {
  it("Should be able to create/initialize a new dictionary", () => {
    expect(dict.size()).to.be.equal(0);
  });
  it("Should be able to add new item to the dictionary", () => {
    dict.set('edwin', 'edwin@email.com');
    dict.set('mike','pence@email.com');
    dict.set('jane', 'janedoe@email.com');
    dict.set('blake','runner@email.com');
    expect(dict.size()).to.be.equal(4);
    expect(dict.get('edwin')).to.be.equal('edwin@email.com');
    expect(dict.get('jane')).to.be.equal('janedoe@email.com');
  });
  it("Should be able to search for a value in the dictionary using it's key", () => {
    expect(dict.get('mike')).to.be.equal('pence@email.com');
    expect(dict.get('blake')).to.be.equal('runner@email.com');
  });
  it("Should be able to check if a key exists in the dictionary", () => {
    expect(dict.has('edwin')).to.be(true);
    expect(dict.has('john')).to.be(false);
  });
  it("Should be able to get the size of the dictionary", () => {
    expect(dict.size()).to.be.equal(4);
  });
  it("Should be able to delete a value from the dictionary", () => {
    dict.delete('edwin');
    expect(dict.get('edwin')).to.be(undefined);
    expect(dict.has('edwin')).to.be(false);
    expect(dict.size()).to.be.equal(3);
  });
  it("Should be able to get all the keys from the dictionary", () => {
    const expected = ['mike', 'jane', 'blake'];
    const keys = dict.keys();
    for (let i = 0; i < keys.length; i += 1) {
      expect(keys[i]).to.be.equal(expected[i]);
    }
  });
  it("Should be able to get all the values from the dictionary", () => {
    const expected = ['pence@email.com', 'janedoe@email.com', 'runner@email.com'];
    const values = dict.values();
    for (let i = 0; i < values.length; i += 1) {
      expect(values[i]).to.be.equal(expected[i]);
    }
  });
  it("Should be able to clear the dictionary", () => {
    dict.clear();
    expect(dict.size()).to.be.equal(0);
  });
});
