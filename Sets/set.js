// Set class definition

class Set {
  constructor() {
    this.items = {};
  }

  add(value) {
    // This adds a new item to the set
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  delete(value) {
    // This removes the value from the set
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  has(value) {
    // This returns true if the value exists in the set or false otherwise
    return value in this.items;
  }

  clear() {
    // This removes all the items from the set
    this.items = {};
  }

  size() {
    // This returns how many elements the set contains
    return Object.keys(this.items).length;
  }

  values() {
    // This returns all the values of the set as an array
    const values = [];
    for (let i = 0, keys = Object.keys(this.items); i < keys.length; i += 1) {
      values.push(this.items[keys[i]]);
    }
    return values;
  }

  union(set) {
    // This concats two sets
    const unionSet = new Set();

    let values = this.values();
    for (let i = 0; i < values.length; i += 1) {
      unionSet.add(values[i]);
    }
    values = set.values();
    for (let i = 0; i < values.length; i += 1) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  intersection(set) {
    // This returns elements that exists in both sets
    const intersectionSet = new Set();

    const values = this.values();
    for (let i = 0; i < values.length; i += 1) {
      if (set.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  difference(set) {
    // This returns elements that does not exist in both sets
    const differenceSet = new Set();
    const values = this.values();
    for (let i = 0; i < values.length; i += 1) {
      if (!set.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  subset(set) {
    // This checks if set A is a subset of set B
    if (this.size() > set.size()) {
      return false;
    }
    const values = this.values();
    for (let i = 0; i < values.length; i += 1) {
      if (!set.has(values[i])) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Set;
