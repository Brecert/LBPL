// @flow

import { NON } from "./globals";
import { setDefaultValue } from "../util/Array";
// generic Node class
export default class Node {
  constructor() {
    // Range or Int
    this.inputs = setDefaultValue([], NON);
    this.outputs = setDefaultValue([], NON);

    // Properties are values that are publically tweakable in the
    // node context menu
    // They must always have a default value
    this.properties = {
      // Inputs: Settable amount of inputs within the inputRange
      // If inputRange is not a range, amount is not settable.
      // Input range is how many inputs can be added to the Node (in properties)
      // It accepts range or an Int, however if it is an int, the input amount will not be shown in properties and the value will remain locked.
      inputs: { value: 0, range: 0 },
      // Same as inputs but outputs
      outputs: { value: 0, range: 0 }
    };

    // An array of nodes that the node is connected to
    this.connections /* : Array<Node> */ = [];
  }

  updateConnection() {
    for (let c of this.connections) {
      c.inputs = this.outputs;
    }
  }

  // update output
  updateOutput() {
    this.inputs = this.output;
  }

  // Methods to make it easy to get and return input
  // in the future
  // Also make it easier to create middleware.
  set input(values) {
    return (this.inputs[0] = values);
  }

  get input() {
    return this.inputs[0];
  }

  set output(values) {
    return (this.outputs[0] = values);
  }

  get output() {
    return this.outputs[0];
  }
}
