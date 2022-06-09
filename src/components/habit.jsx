import React, { Component } from "react";
import Button from "./button";
import CountBox from "./countBox";

class Habit extends Component {
  render() {
    const habit = this.props.habit;

    return (
      <li id="habit">
        <span onDoubleClick={() => console.log(2)}>{habit.name}</span>
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
// span 더블클릭 시 항목수정 기능 추가해야함.
export default Habit;
