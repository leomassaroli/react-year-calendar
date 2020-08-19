import React from "react";
import Month from "./month.jsx";
export default function (props) {
  const year = props.year;

  return (
    <div className="calendar_column">
      <Month year={year} month={props.months[0]} />
      <Month year={year} month={props.months[1]} />
      <Month year={year} month={props.months[2]} />
      <Month year={year} month={props.months[3]} />
    </div>
  );
}
