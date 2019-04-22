// Graph data structure class definition
const Dictionary = require("../Dictionaries/dictionary");

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
}

module.exports = Graph;
