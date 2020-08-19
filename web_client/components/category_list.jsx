import React from "react";
import Category from "./category.jsx";

class CategoryList extends React.Component {
  render() {
    return (
      <ul>
        <Category>Vacaciones</Category>
        <Category>Trabajo</Category>
      </ul>
    );
  }
}

export default CategoryList;
