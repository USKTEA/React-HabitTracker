import React, { Component } from "react";
import CountBox from "./countBox";

class Navbar extends Component {
  render() {
    return (
      <nav id="nav-bar">
        🔥habitTracker <CountBox number={this.props.number} />
      </nav>
    );
  }
}

export default Navbar;
