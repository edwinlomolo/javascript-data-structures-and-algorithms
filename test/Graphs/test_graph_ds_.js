////////////////////////////////////////////////////
// Graph data structure implementation test cases //
////////////////////////////////////////////////////

const expect = require("expect.js");
const Graph = require("../../Graphs/graph");
let graph;

// Hook
beforeEach(() => {
  graph = new Graph();
});

describe("Interacting with Graph data structure", () => {
  it("Should be able to initialize a new Graph data structure", () => {
    expect(graph.vertices.length).to.be.equal(0);
    expect(Object.keys(graph.adjList.items).length).to.be.equal(0);
  });
});
