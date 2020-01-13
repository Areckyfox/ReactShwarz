import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map(({ id, name, age }, index) => {
    return (
      <Person
        key={id}
        name={name}
        age={age}
        click={() => props.click(index)}
        val={name}
        changed={event => props.changed(event, id)}
      />
    );
  });

export default persons;
