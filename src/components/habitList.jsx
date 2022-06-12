import React from "react";
import Habit from "./habit";

function HabitList(props) {
  return (
    <ul id="habit-list">
      {props.habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          handleIncrement={props.handleIncrement}
          handleDecrement={props.handleDecrement}
          handleDelete={props.handleDelete}
        ></Habit>
      ))}
    </ul>
  );
}

export default HabitList;
