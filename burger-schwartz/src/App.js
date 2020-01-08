import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Manu", age: "28" },
      { name: "Max", age: "24" },
      { name: "Sam", age: "20" }
    ]
  };
  switchNameHandler = name => {
    this.setState({
      persons: [
        { name: name, age: "28" },
        { name: "Max", age: "24" },
        { name: "Sam", age: "99" }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Shwartz</h1>
        <button onClick={this.switchNameHandler.bind(this, "Maksikon")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Szczałkom")}
        >
          Some additional information
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
