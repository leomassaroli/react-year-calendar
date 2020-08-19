import React from "react";
export default function (props) {
  const year = props.year;
  const monthNumber = props.month.month;
  const daysNumber = new Date(year, monthNumber, 0).getDate();

  const blanks = new Date(year, monthNumber - 1, 1).getDay();
  const totalSlots = blanks + daysNumber;

  const weeks = Math.ceil(totalSlots / 7);
  const weeksMatrix = [];
  for (let i = 0; i < weeks; i++) {
    weeksMatrix[i] = [];
    for (let j = 0; j < 7; j++) {
      const dayPos = i * 7 + (j + 1);

      if (dayPos > totalSlots) {
        break;
      }

      if (blanks >= dayPos) {
        weeksMatrix[i][j] = null;
        continue;
      }

      weeksMatrix[i][j] = dayPos - blanks;
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
        <td>{weeksMatrix[week][0]}</td>
        <td>{weeksMatrix[week][1]}</td>
        <td>{weeksMatrix[week][2]}</td>
        <td>{weeksMatrix[week][3]}</td>
        <td>{weeksMatrix[week][4]}</td>
        <td>{weeksMatrix[week][5]}</td>
        <td>{weeksMatrix[week][6]}</td>
      </tr>
    );
  }

  return (
    <div>
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
