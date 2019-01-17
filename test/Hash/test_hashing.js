// HashTable implementation

const Hash = require("../../Hash/hash");
const expect = require("expect.js");

let table;

// Hook
before(() => {
  table = new Hash();
});

describe("Interacting with hash data structure", () => {
  it("Should be able to add new item to the hash table", () => {
    table.put('edwin', 'edwin@email.com');
    table.put('pence', '51 111 3487');
    table.put('blake', 'blake@yahoo.com');
    expect(table.get('pence')).to.be.equal('51 111 3487');
    expect(table.get('blake')).to.be.equal('blake@yahoo.com');
  });
});
