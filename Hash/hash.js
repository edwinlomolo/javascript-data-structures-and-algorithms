// HashTable class definition

class Hash {
  constructor() {
    this.table = [];
  }

  loseloseHashCode(key) {
    const hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  put(key, value) {
    // This adds a new item to the hash table(or it can also update it)
    const position = loseloseHashCode(key);
    this.table[position] = value; 
  }

  remove(key) {
    // This removes the value from the hash table using the key
    this.table[loseloseHashCode(key)] = undefined;
  }

  get(key) {
    // This returns a specific value searched by the key
    return this.table[loseloseHashCode(key)];
  }
}

module.exports = Hash;
