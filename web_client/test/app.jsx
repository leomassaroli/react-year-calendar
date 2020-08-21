// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import App from "../components/app.jsx";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  console.log("tree", tree);
});
