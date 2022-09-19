/**
 * GRAPH FUNCTIONS.
 */

/**
 * getNodeInputConnections: Get a node input connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  return Object.values(graph.connections).filter(
    (connection) => connection.targetPath === node.id
  );
}

/**
 * getNodeOutputConnections: Get a node output connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  return Object.values(graph.connections).filter(
    (connection) => connection.sourcePath === node.id
  );
}

/**
 * getNodeConnections: Get a node connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  return Object.values(graph.connections).filter(
    (connection) =>
      connection.sourcePath === node.id || connection.targetPath === node.id
  );
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  return Object.values(graph.nodes).filter(
    (node) => getNodeOutputConnections(node, graph).length === 0
  );
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  return Object.values(graph.nodes).filter(
    (node) => getNodeInputConnections(node, graph).length === 0
  );
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  const sourcePaths = getNodeInputConnections(node, graph).map(
    (connection) => connection.sourcePath
  );
  return [...new Set(sourcePaths)].length > 1;
}
