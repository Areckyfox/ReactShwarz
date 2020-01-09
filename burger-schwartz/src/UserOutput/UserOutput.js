import React from "react";


const output = (props) => {
    const { userName } = props;
    return (
      <div>
        <p>{userName}</p>
        <p>age</p>
      </div>
    );
}

export default output;