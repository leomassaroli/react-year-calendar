import React from "react";
import CalendarColumn from "./calendar_column.jsx";
import "./calendar.css";
class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.date = props.date;
    this.year = this.date.getFullYear();
  }

  render() {
    return (
      <div className="calendar">
        <p>Year {this.year}</p>

        <CalendarColumn
          year={this.year}
          months={[yearData[0], yearData[1], yearData[2], yearData[3]]}
        />
        <CalendarColumn
          year={this.year}
          months={[yearData[4], yearData[5], yearData[6], yearData[7]]}
        />
        <CalendarColumn
          year={this.year}
          months={[yearData[8], yearData[9], yearData[10], yearData[11]]}
        />
      </div>
    );
  }
}

const yearData = [
  {
    month: 1,
    name: "January",
  },
  {
    month: 2,
    name: "February",
  },
  {
    month: 3,
    name: "March",
  },
  {
    month: 4,
    name: "April",
  },
  {
    month: 5,
    name: "May",
  },
  {
    month: 6,
    name: "June",
  },
  {
    month: 7,
    name: "July",
  },
  {
    month: 8,
    name: "August",
  },
  {
    month: 9,
    name: "September",
  },
  {
    month: 10,
    name: "October",
  },
  {
    month: 11,
    name: "November",
  },
  {
    month: 12,
    name: "December",
  },
];

export default Calendar;
