import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

window.onload = function () {
  // Renderizamos la App
  ReactDOM.render(<App />, document.getElementById("root"));
};
