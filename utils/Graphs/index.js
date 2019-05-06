// Graphs algorithms helper methods

const initializeColor = vertices => {
  const color = [];
  for (let i = 0; i < vertices.length; i += 1) {
    color[vertices[i]] = 'white';
  }
  return color;
};

module.exports = {
  initializeColor,
};
