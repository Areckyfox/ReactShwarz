import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: 33333, age: "28" },
      { id: "2", name: "Max", age: "24" },
      { id: "3", name: "Sam", age: "20" }
    ],
    showPersons: false,
    showCockpit: true,
    counter:0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return props;
  }
  // componentWillMount() {
  //   console.log("[App.js] componetWillMount");
  // }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponentUpdate(beforeProps, beforeState) {
    console.log("[App.js] shouldComponentUpdate ");
    return true;
  }

  deletePersonHandler = index => {
    let newPersons = this.state.persons.filter((el, i) => i !== index);
    this.setState((prevState, props)=>{
      return {
        persons: newPersons, 
        counter: prevState.counter + 1
      }
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
    console.log("[App.js] renderMethod");

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
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit butto
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            clicked={this.togglePersonsHandlers}
            textWelcome={this.props.appTitle}
            textButton={"togle persons"}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
