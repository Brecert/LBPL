import Node from "./Node";

// Gate class
export default class Gate extends Node {
  constructor() {
    super();
    this.properties.inputs = { value: 1, range: 1 };
    this.properties.outputs = { value: 1, range: 1 };
  }
}
