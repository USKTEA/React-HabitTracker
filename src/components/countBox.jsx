import React, { Component } from "react";

class CountBox extends Component {
  render() {
    return <div id="count-box">{this.props.number}</div>;
  }
}

export default CountBox;
