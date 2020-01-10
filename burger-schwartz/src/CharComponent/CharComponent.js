import React from 'react';

const charBrick = (props) => {
const {char, click} = props;
const style ={
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    mmargin: "16px",
    border: "1px solid black"
}


    return <p style={style} onClick={click}>{char} </p>
}

export default charBrick