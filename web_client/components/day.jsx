import React from "react";
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: props.day,
    };
  }

  render() {
    return <td className="day">{this.state.day}</td>;
  }
}
export default Day;
