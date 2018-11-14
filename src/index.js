import React from "react";
import ReactDOM from "react-dom";

import traverse from "./logic/traverse";
import Not from "./logic/gates/Not";
import Battery from "./logic/nodes/Battery";

import "./styles.css";

let bat = new Battery();
let not = new Not();
bat.connections[0] = not;
not.connections[0] = not;
setInterval(() => {
  traverse(not);
  traverse(bat);
  console.log(not);
}, 1000);
// traverse(not);

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
