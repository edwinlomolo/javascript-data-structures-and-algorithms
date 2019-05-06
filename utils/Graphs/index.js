// Graphs algorithms helper methods

const initializeColor = vertices => {
  const color = [];
  for (let i = 0; i < vertices.length; i += 1) {
    color[vertices[i]] = 'white';
  }
  return color;
};

const dfsVisit = (u, color, cb, adjList) => {
  /* eslint-disable */
  color[u] = 'grey';
  /* eslint-enable */
  if (cb) {
    cb(u);
  }
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i += 1) {
    const w = neighbors[i];
    if (color[w] === 'white') {
      dfsVisit(w, color, cb);
    }
  }
  /* eslint-disable */
  color[u] = 'black';
  /* eslint-enable */
};

module.exports = {
  initializeColor,
  dfsVisit,
};
