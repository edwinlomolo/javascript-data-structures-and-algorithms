// Graph data structure class definition
const Dictionary = require("../Dictionaries");
const Queue = require("../Queues");
const { initializeColor } = require("../utils/Graphs");

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  /**
   * add a vertex to a list of vertices
   * @param  v vertex to be added to the graph
   */
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  /**
   * this method receives two vertices as parameters.
   * First, we add an edge from vertex v to vertex w
   * by adding w to the adjacent list of vertex v.
   */
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  /**
   * BFS algorithm
   */
  bfs(v, cb) {
    const color = initializeColor(this.vertices);
    const queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      const neighbors = this.adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i += 1) {
        const w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
      if (cb) {
        cb(u);
      }
    }
  }

  dfsVisit(u, color, cb) {
    /* eslint-disable */
    color[u] = 'grey';
    /* eslint-enable */
    if (cb) {
      cb(u);
    }
    const neighbors = this.adjList.get(u);
    for (let i = 0; i < neighbors.length; i += 1) {
      const w = neighbors[i];
      if (color[w] === 'white') {
        this.dfsVisit(w, color, cb);
      }
    }
    /* eslint-disable */
    color[u] = 'black';
    /* eslint-enable */
  }

  /**
   * DFS algorithm
   */
  dfs(cb) {
    const color = initializeColor(this.vertices);
    for (let i = 0; i < this.vertices.length; i += 1) {
      if (color[this.vertices[i]] === 'white') {
        this.dfsVisit(this.vertices[i], color, cb);
      }
    }
  }

  /**
   * Print graph to the console
   */
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i += 1) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j += 1) {
        s += `${neighbors[j]} `;
      }
      s += "\n";
    }
    return s;
  }
}

module.exports = Graph;
