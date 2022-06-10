import React, { Component } from "react";
import Button from "./button";
import CountBox from "./countBox";

class Habit extends Component {
  state = {
    edit: false,
    value: this.props.habit.name,
  };

  handleDoubleClick = () => {
    const states = { ...this.state };
    states.edit = !states.edit;

    this.setState(states);
  };

  handleChange = (event) => {
    const states = { ...this.state, value: event.target.value };

    this.setState(states);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const states = { edit: false, value: this.state.value };

    this.setState(states);
  };

  render() {
    const habit = this.props.habit;

    return (
      <li className="habit">
        {this.state.edit ? (
          <form onSubmit={this.handleSubmit}>
            <input
              className="edit-habit-input"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        ) : (
          <span onDoubleClick={this.handleDoubleClick}>{this.state.value}</span>
        )}

        <CountBox number={habit.count}></CountBox>
        <Button
          class="habit-button"
          name={"➕"}
          handleClick={() => this.props.handleIncrement(habit.id)}
        />
        <Button
          class="habit-button"
          name={"➖"}
          handleClick={() => this.props.handleDecrement(habit.id)}
        />
        <Button
          class="habit-button"
          name={"🪄"}
          handleClick={() => this.props.handleDelete(habit.id)}
        />
      </li>
    );
  }
}

export default Habit;
