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
        <p>Año {this.year}</p>

        <CalendarColumn
          year={this.year}
          months={[
            yearData.enero,
            yearData.febrero,
            yearData.marzo,
            yearData.abril,
          ]}
        />
        <CalendarColumn
          year={this.year}
          months={[
            yearData.mayo,
            yearData.junio,
            yearData.julio,
            yearData.agosto,
          ]}
        />
        <CalendarColumn
          year={this.year}
          months={[
            yearData.septiembre,
            yearData.octubre,
            yearData.noviembre,
            yearData.diciembre,
          ]}
        />
      </div>
    );
  }
}

const yearData = {
  enero: {
    month: 1,
    name: "Enero",
  },
  febrero: {
    month: 2,
    name: "Febrero",
  },
  marzo: {
    month: 3,
    name: "Marzo",
  },
  abril: {
    month: 4,
    name: "Abril",
  },
  mayo: {
    month: 5,
    name: "Mayo",
  },
  junio: {
    month: 6,
    name: "Junio",
  },
  julio: {
    month: 7,
    name: "Julio",
  },
  agosto: {
    month: 8,
    name: "Agosto",
  },
  septiembre: {
    month: 9,
    name: "Septiembre",
  },
  octubre: {
    month: 10,
    name: "Octubre",
  },
  noviembre: {
    month: 11,
    name: "Noviembre",
  },
  diciembre: {
    month: 12,
    name: "Diciembre",
  },
};

export default Calendar;
