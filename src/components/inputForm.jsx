import React, { Component } from "react";
import Button from "./button";

class InputForm extends Component {
  render() {
    return (
      <form id="input-form" onSubmit={this.props.handleSubmit}>
        <input
          id="habit-input"
          type="text"
          placeholder="What is your habit?"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <Button
          css={"input-button"}
          name={"ADD"}
          onClick={this.props.handleSubmit}
        />
      </form>
    );
  }
}

export default InputForm;
