import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Code } from "./components/Code";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Code />
  </React.StrictMode>,
  document.getElementById("root")
);
