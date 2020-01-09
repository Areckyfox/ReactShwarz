import React from "react";

const person = props => {
  const { name, age, click, children, changed, value } = props;
  return (
    <div className= "person">
      <p onClick={click}>
        I'm a {name} and I'm {age} years old!{" "}
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={value} />
    </div>
  );
};

export default person;
