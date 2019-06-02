// HashTable class definition

const looseHashCode = require("../utils/Hash");

class Hash {
  constructor() {
    this.table = [];
  }

  put(key, value) {
    // This adds a new item to the hash table(or it can also update it)
    const position = looseHashCode(key);
    this.table[position] = value;
  }

  remove(key) {
    // This removes the value from the hash table using the key
    this.table[looseHashCode(key)] = undefined;
  }

  get(key) {
    // This returns a specific value searched by the key
    return this.table[looseHashCode(key)];
  }
}

module.exports = Hash;
