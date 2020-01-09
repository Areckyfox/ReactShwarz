import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Manu", age: "28" },
      { id: "2", name: "Max", age: "24" },
      { id: "3", name: "Sam", age: "20" }
    ],
    showPersons: false
  };

  deletePersonHandler = (index) => {
    let newPersons = this.state.persons.filter((el, i)=> i !== index)
    this.setState ({
      persons: newPersons
    })
  }
  togglePersonsHandlers = () => {
    let show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  };
  changeInputHandler = (event, idPerson) => {
   let personId = this.state.persons.findIndex((el)=> el.id === idPerson);

    const person = { ...this.state.persons[personId] };
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personId] = person;

    this.setState({
      persons: persons
    })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(({id, name, age }, index) => {
            return (
              <Person
                key={id}
                name={name}
                age={age}
                click={() => this.deletePersonHandler(index)}
                val={name}
                changed={event => this.changeInputHandler(event, id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Welcome to React Shwartz</h1>
        <button onClick={this.togglePersonsHandlers}>Togle Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
