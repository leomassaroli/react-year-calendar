import React, { useState } from "react";
import Category from "./category.jsx";
export default function (props) {
  const selectedCategory = props.selectedCategory;
  const setSelectedCategory = props.setSelectedCategory;
  const categories = props.categories;
  const setCategories = props.setCategories;

  const [inputValue, setInputValue] = useState("");

  function renderCategories() {
    return categories.map((c, i) => <Category key={i}>{c}</Category>);
  }

  return (
    <ul>
      {renderCategories()}
      <li>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a category"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && inputValue.length) {
              // When the user press Enter, inputValue converts in a category
              categories.push(inputValue);
              setCategories(categories);
              setInputValue("");
            }
          }}
        />
      </li>
    </ul>
  );
}
