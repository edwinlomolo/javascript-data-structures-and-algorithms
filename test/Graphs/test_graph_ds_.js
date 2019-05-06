////////////////////////////////////////////////////
// Graph data structure implementation test cases //
////////////////////////////////////////////////////

const expect = require("expect.js");
const Graph = require("../../Graphs/graph");
let graph;

const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Hook
before(() => {
  graph = new Graph();
});

describe("GRAPHS DATA STRUCTURE", () => {
  it("Should be able to initialize a new Graph data structure", () => {
    expect(graph.vertices.length).to.be.equal(0);
    expect(Object.keys(graph.adjList.items).length).to.be.equal(0);
  });
  it("Should be able to add a vertex to the Graph", () => {
    for (let i = 0; i < vertices.length; i += 1) {
      graph.addVertex(vertices[i]);
    }
    expect(graph.vertices.length).to.be.above(0);
    expect(Object.keys(graph.adjList).length).to.be.above(0);
    expect(graph.vertices.length).to.be.equal(9);
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');
  });
  it("Should be able to perform Breadth-First-Search on a Graph", () => {
    const visitedVertex = [];
    const getVisitedNodes = value => {
      visitedVertex.push(value);
    };
    graph.bfs(vertices[0], getVisitedNodes);
    for (let i = 0; i < vertices.length; i += 1) {
      expect(visitedVertex[i]).to.be.equal(vertices[i]);
    }
  });
  it("Should be able to perform Depth-First-Search on a Graph", () => {
    graph.dfs();
  });
});
