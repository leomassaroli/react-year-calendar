import CategoryList from "./category_list.jsx";
import React, { useState } from "react";
import "./app.css";
import Calendar from "./calendar.jsx";
export default function (props) {
  const date = new Date();
  const [categories, setCategories] = useState(["Holidays", "Work"]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="app">
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        setCategories={setCategories}
      />
      <Calendar date={date} selectedCategory={selectedCategory} />
    </div>
  );
}
