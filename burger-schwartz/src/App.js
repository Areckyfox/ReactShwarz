import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Validation from './ValidationComponent/ValidationComponet';
import CharBrick from './CharComponent/CharComponent'

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Manu", age: "28" },
      { id: "2", name: "Max", age: "24" },
      { id: "3", name: "Sam", age: "20" }
    ],
    showPersons: false,
    inputText: ""
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
  handlerInputText = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  removeBrickHandler = (i) => {
    const newText = this.state.inputText.split("").filter((el, index) => index !== i ).join("");
    this.setState({
      inputText: newText
    })
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(({ id, name, age }, index) => {
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

    const BricksList = this.state.inputText.split("").map((el, index) => {
      return (
        <CharBrick key={index} char={el} click={() => this.removeBrickHandler(index)} />
      );
    });

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <button onClick={this.togglePersonsHandlers}>Togle Name</button>
        {persons}
        <br />
        <br />
        <input onChange={this.handlerInputText} type="text" value={this.state.inputText} />
        <br />
        <p>Length: {this.state.inputText.length}</p>
        <Validation length={this.state.inputText.length} />
        <div>{BricksList}</div>
      </div>
    );
  }
}

export default App;
