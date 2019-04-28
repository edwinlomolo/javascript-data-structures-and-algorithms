// Hash class data structure helper methods
const looseHashCode = key => {
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash += key.charCodeAt(key[i]);
  }
  return hash % 37;
};

module.exports = looseHashCode;
