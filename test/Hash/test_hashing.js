// HashTable implementation

const Hash = require("../../Hash");
const expect = require("expect.js");

let table;

// Hook
before(() => {
  table = new Hash();
});

describe("HASH DATA STRUCTURE", () => {
  it("Should be able to add new item to the hash table", () => {
    table.put('edwin', 'edwin@email.com');
    table.put('pence', '51 111 3487');
    table.put('blake', 'blake@yahoo.com');
    expect(table.get('pence')).to.be.equal('51 111 3487');
    expect(table.get('blake')).to.be.equal('blake@yahoo.com');
  });
  it("Should be able to search for a value by key in the hash table", () => {
    expect(table.get('edwin')).to.be.equal('edwin@email.com');
    expect(table.get('blake')).to.be.equal('blake@yahoo.com');
  });
  it("Should be able to remove/delete a value from the hash table", () => {
    table.remove('edwin');
    table.remove('pence');
    expect(table.get('edwin')).to.be(undefined);
    expect(table.get('pence')).to.be(undefined);
  });
});
