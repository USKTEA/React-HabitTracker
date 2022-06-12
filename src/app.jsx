import "./app.css";
import Button from "./components/button";
import HabitList from "./components/habitList";
import InputForm from "./components/inputForm";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "coding", count: 0 },
    { id: 2, name: "reading", count: 0 },
    { id: 3, name: "exercise", count: 0 },
  ]);

  const handleIncrement = (id) => {
    const handledHabits = [...habits];

    const plusedHabits = handledHabits.map((habit) => {
      if (habit.id === id) {
        habit.count++;
      }

      return habit;
    });

    setHabits(plusedHabits);
  };

  const handleDecrement = (id) => {
    const handledHabits = [...habits];
    let changed = false;

    const minusedHabits = handledHabits.map((habit) => {
      if (habit.id === id && habit.count > 0) {
        habit.count--;
        changed = true;
      }

      return habit;
    });

    return changed ? setHabits(minusedHabits) : null;
  };

  const handleDelete = (id) => {
    const handledHabits = [...habits];
    const filterdHabits = handledHabits.filter((habit) => {
      return habit.id !== id;
    });

    setHabits(filterdHabits);
  };

  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    setInputs(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputs.length) {
      return;
    }

    const handledHabits = [...habits];
    const inputHabits = { id: new Date().getTime(), name: inputs, count: 0 };
    handledHabits.push(inputHabits);

    setInputs("");
    setHabits(handledHabits);
  };

  const handleReset = () => {
    setHabits([]);
  };

  return (
    <>
      <Navbar count={habits.length}></Navbar>
      <InputForm
        id="habit-input"
        value={inputs}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></InputForm>
      <HabitList
        habits={habits}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleDelete={handleDelete}
      ></HabitList>
      {habits.length ? (
        <Button onClick={handleReset} css="reset-button" name="Reset"></Button>
      ) : null}
    </>
  );
}

export default App;
