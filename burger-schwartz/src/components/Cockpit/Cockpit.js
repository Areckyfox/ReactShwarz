import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const { textWelcome, textButton, clicked } = props;

  useEffect(() => {
    console.log("[Cocpit.js] useEffect");
    setTimeout(() => {
      alert("saved data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  return (
    <div>
      <h1>{textWelcome}</h1>
      <button className={classes.buttonns} onClick={clicked}>
        {textButton}
      </button>
    </div>
  );
};

export default cockpit;
