import React, { useState } from "react";
import CountBox from "./countBox";
import Button from "./button";
import InputForm from "./inputForm";

function Habit(props) {
  const { id, name, count } = props.habit;
  const [isEdit, setIsEdit] = useState(false);
  const [habit, setHabit] = useState(name);

  const handleEdit = () => {
    setIsEdit((previousIsEdit) => !previousIsEdit);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!habit.length) {
      return;
    }

    setIsEdit((previousIsEdit) => !previousIsEdit);
  };

  const handleChange = (event) => {
    setHabit(event.target.value);
  };

  return (
    <li className="habit">
      {isEdit ? (
        <InputForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          className="edit-habit-input"
          value={habit}
        ></InputForm>
      ) : (
        <span onDoubleClick={handleEdit}>{habit}</span>
      )}
      <CountBox count={count}></CountBox>
      <Button
        className="habit-button"
        name="➕"
        onClick={() => props.handleIncrement(id)}
      ></Button>
      <Button
        className="habit-button"
        name="➖"
        onClick={() => props.handleDecrement(id)}
      ></Button>
      <Button
        className="habit-button"
        name="🪄"
        onClick={() => props.handleDelete(id)}
      ></Button>
    </li>
  );
}

export default Habit;
