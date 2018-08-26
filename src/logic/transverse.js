// Crawl the AST structure and update/execute them.
export default function transverse(node: Node) {
  console.log(node);
  node.updateConnection();
  node.updateOutput();
  for (let connection of node.connections) {
    if (connection === node) {
      break;
    } else {
      transverse(connection);
    }
  }
}
