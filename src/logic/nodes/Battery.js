import { MAX, MIN } from "../globals";
import Node from "../Node";

export default class Battery extends Node {
  constructor() {
    super();
    this.properties.outputs = { value: 1, range: 1 };
    this.properties.percentage = { value: MAX, range: new Range(MIN, MAX) };
    this.updateOutput();
  }

  updateOutput() {
    this.output = this.properties.percentage.value;
  }
}
