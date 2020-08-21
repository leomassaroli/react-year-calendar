import React from "react";
import Day from "./day.jsx";
export default function (props) {
  const year = props.year;
  const monthNumber = props.month.month;
  const daysNumber = new Date(year, monthNumber, 0).getDate();

  const blanks = new Date(year, monthNumber - 1, 1).getDay();
  const totalSlots = blanks + daysNumber;

  const weeks = 6;
  const weeksMatrix = [];
  for (let i = 0; i < weeks; i++) {
    weeksMatrix[i] = [];
    for (let j = 0; j < 7; j++) {
      const dayPos = i * 7 + (j + 1);

      if (dayPos > totalSlots) {
        weeksMatrix[i][j] = <td></td>;
        continue;
      }

      if (blanks >= dayPos) {
        weeksMatrix[i][j] = <td></td>;
        continue;
      }

      weeksMatrix[i][j] = <Day day={dayPos - blanks} />;
    }
  }

  function renderWeeks() {
    return weeksMatrix.map((week, i) => {
      return renderWeek(i);
    });
  }

  function renderWeek(week) {
    return (
      <tr>
        {weeksMatrix[week][0]}
        {weeksMatrix[week][1]}
        {weeksMatrix[week][2]}
        {weeksMatrix[week][3]}
        {weeksMatrix[week][4]}
        {weeksMatrix[week][5]}
        {weeksMatrix[week][6]}
      </tr>
    );
  }

  return (
    <div className="month">
      <p>{props.month.name}</p>

      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>

        <tbody>{renderWeeks()}</tbody>
      </table>
    </div>
  );
}
