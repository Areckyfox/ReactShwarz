import React from "react";


const validation = (props) => {
   const {length} = props;
   const text = length < 5 ? "Text too short": "Text long enough" ;


    return <p>{text}</p>;
}

export default validation