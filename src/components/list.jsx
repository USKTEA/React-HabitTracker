import React, { Component } from "react";
import Habit from "./habit";

class List extends Component {
  render() {
    return (
      <ul id="habit-list">
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrement={this.props.handleIncrement}
            handleDecrement={this.props.handleDecrement}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default List;
