import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Manu", age: "28" },
      { id: "2", name: "Max", age: "24" },
      { id: "3", name: "Sam", age: "20" }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    let newPersons = this.state.persons.filter((el, i) => i !== index);
    this.setState({
      persons: newPersons
    });
  };
  togglePersonsHandlers = () => {
    let show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  };
  changeInputHandler = (event, idPerson) => {
    let personId = this.state.persons.findIndex(el => el.id === idPerson);

    const person = { ...this.state.persons[personId] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({
      persons: persons
    });
  };
  render() {
    let persons = "";
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.changeInputHandler}
          click={this.deletePersonHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <h1>Welcome to React Shwartz</h1>
        <button
          className={classes.buttonns}
          onClick={this.togglePersonsHandlers}
        >
          Togle Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
