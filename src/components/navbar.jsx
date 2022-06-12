import React from "react";
import CountBox from "./countBox";

function Navbar(props) {
  return (
    <nav id="nav-bar">
      🔥HabitTracker<CountBox count={props.count}></CountBox>
    </nav>
  );
}

export default Navbar;
