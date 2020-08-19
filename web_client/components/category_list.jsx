import React from "react";
import Category from "./category.jsx";

class CategoryList extends React.Component {
  render() {
    return (
      <ul>
        <Category>Vacaciones (TODO)</Category>
        <Category>Trabajo (TODO)</Category>
      </ul>
    );
  }
}

export default CategoryList;
