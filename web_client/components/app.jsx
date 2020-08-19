import CategoryList from "./category_list.jsx";
import React from "react";
import "./app.css";
import Calendar from "./calendar.jsx";
export default function (props) {
  const date = new Date();

  return (
    <div className="app">
      <p>petes de mierda</p>
      <CategoryList />
      <Calendar date={date} />
    </div>
  );
}