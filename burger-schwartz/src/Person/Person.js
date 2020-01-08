import React from "react";

const person = props => {
  const { name, age, click, children } = props;
  return (
    <div>
      <p onClick={click}>
        I'm a {name} and I'm {age} years old!{" "}
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
