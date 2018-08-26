import Range from "../../util/Range";
import Gate from "../Gate";

export default class Not extends Gate {
  constructor() {
    super();
    this.properties.inputs = { value: 2, range: new Range(2, 100) };
  }

  updateOutput() {
    this.output = -this.input;
  }
}
