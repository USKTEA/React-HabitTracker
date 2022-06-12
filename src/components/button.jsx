import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className} id={props.css}>
      {props.name}
    </button>
  );
}

export default Button;
