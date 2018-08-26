import Node from "./Node";

export class Print extends Node {
  constructor() {
    super();
    this.properties.inputs = { value: 1, range: 1 };
  }
}
