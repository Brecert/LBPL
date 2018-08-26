import React from "react";
import ReactDOM from "react-dom";

import transverse from "./logic/transverse";
import Not from "./logic/gates/Not";
import Battery from "./logic/nodes/Battery";

import "./styles.css";

let bat = new Battery();
let not = new Not();
bat.connections[0] = not;
transverse(bat);
console.log(not);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
