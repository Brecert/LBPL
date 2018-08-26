import isActive from "../../util/isActive";
import Range from "../../util/Range";
import { minInArray } from "../../util/Array";
import { NON } from "../globals";
import Gate from "../Gate";

export default class And extends Gate {
  constructor() {
    super();
    this.properties.inputs = { value: 2, range: new Range(2, 100) };
  }

  updateOutput() {
    if (this.inputs.every(input => isActive(input))) {
      this.output = minInArray(this.inputs);
    } else {
      this.output = NON;
    }
  }
}
