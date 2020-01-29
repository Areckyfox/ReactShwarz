import React, { Component } from "react";
import Aux from "../../../hoc/Aux";


class Person extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps ", props, state);
    return props;
  }
  render() {
    console.log("[Person.js rendering ....]");

    const { name, age, click, children, val, changed } = this.props;
    return (
      <Aux>
        <input type="text" value={val} onChange={changed} />
        <p onClick={click}>
          I'm a {name} and I'm {age} years old!
        </p>
        <p>{children}</p>
      </Aux>
    );
  }
}

export default Person;
