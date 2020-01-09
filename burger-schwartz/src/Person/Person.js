import React from "react";

const person = props => {
  const { name, age, click, children, val, changed } = props;
  return (
    <div>
      <input type="text" value={val} onChange={changed} />
      <p onClick={click}>
        I'm a {name} and I'm {age} years old!{" "}
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
