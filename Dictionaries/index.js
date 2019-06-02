// Dictionary class definition

class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    // This adds a new item to the dictionary
    this.items[key] = value;
  }

  delete(key) {
    // This removes the value from the dictionary using the key
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  has(key) {
    // This returns true if the key exists in the dictionary and false otherwise
    return key in this.items;
  }

  get(key) {
    // This returns a specific value searched by the key
    return this.has(key) ? this.items[key] : undefined;
  }

  clear() {
    // This removes all the items from the dictionary
    this.items = {};
  }

  size() {
    // This returns how many elements the dictionary contains.
    return Object.keys(this.items).length;
  }

  keys() {
    // This returns all the keys the dictionary contains as an array
    return Object.keys(this.items);
  }

  values() {
    // This returns all the values the dictionary contains as an array
    const values = [];
    const keys = Object.keys(this.items);
    for (let i = 0; i < keys.length; i += 1) {
      if (this.has(keys[i])) {
        values.push(this.items[keys[i]]);
      }
    }
    return values;
  }
}

module.exports = Dictionary;
