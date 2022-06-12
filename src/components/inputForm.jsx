import React from "react";
import Button from "./button";

function InputForm(props) {
  return (
    <form id="input-form" onSubmit={props.handleSubmit}>
      <input
        onChange={props.handleChange}
        id={props.id}
        className={props.className}
        type="text"
        placeholder="type your habits..."
        value={props.value}
      ></input>
      {props.className ? null : <Button css="input-button" name="ADD"></Button>}
    </form>
  );
}

export default InputForm;
