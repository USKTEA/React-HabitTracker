import "./app.css";
import InputForm from "./components/inputForm";
import Navbar from "./components/nav";
import React, { Component } from "react";
import Button from "./components/button";
import List from "./components/list";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "coding", count: 0 },
      { id: 3, name: "exercise", count: 0 },
    ],
    inputs: "",
  };

  handleChange = (event) => {
    const states = { ...this.state, inputs: event.target.value };
    this.setState(states);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputs.length > 0) {
      const states = { habits: [...this.state.habits], inputs: "" };

      states.habits.push({
        id: new Date().getTime(),
        name: this.state.inputs,
        count: 0,
      });

      this.setState(states);
    }
  };

  handleIncrement = (id) => {
    const habits = [...this.state.habits];
    habits.forEach((habit) => {
      if (habit.id === id) {
        habit.count++;
      }
    });

    this.setState({ habits });
  };

  handleDecrement = (id) => {
    const habits = [...this.state.habits];
    habits.forEach((habit) => {
      if (habit.id === id && habit.count > 0) {
        habit.count--;
      }
    });

    this.setState({ habits });
  };

  handleDelete = (id) => {
    const habits = [...this.state.habits];
    const lastHabits = habits.filter((habit) => habit.id !== id);

    this.setState({ habits: lastHabits });
  };

  render() {
    return (
      <>
        <Navbar number={this.state.habits.length} />
        <InputForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.inputs}
        />
        <List
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
