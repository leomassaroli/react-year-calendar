// Link.react.test.js
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import CategoryList from "../components/category_list.jsx";

describe("CategoryList test suite", () => {
  test("The setCategories callback must not be called when user press Enter on input and input has not a value", () => {
    const categories = [];
    const setCategories = jest.fn();

    const wrapper = shallow(
      <CategoryList categories={categories} setCategories={setCategories} />
    );

    // Pressing Enter key
    wrapper.find("input").simulate("keyDown", { keyCode: 13 }, 1);

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("The setCategories callback must be called when user press Enter on input and input has a value", () => {
    const categories = [];
    const setCategories = jest.fn();

    const wrapper = shallow(
      <CategoryList categories={categories} setCategories={setCategories} />
    );

    // Setting a value to input
    wrapper
      .find("input")
      .simulate("change", { target: { value: "new category" } });

    // Pressing Enter key
    wrapper.find("input").simulate("keyDown", { keyCode: 13 }, 1);

    expect(setCategories).toHaveBeenCalled();
  });
});
