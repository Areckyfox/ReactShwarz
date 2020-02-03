import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const { textWelcome, textButton, clicked } = props;

  const togleBunRef = useRef(null);


  useEffect(() => {
    console.log("[Cocpit.js] useEffect");
    // setTimeout(() => {
    //   alert("saved data to cloud");
    // }, 1000);
    togleBunRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  return (
    <div>
      <h1>{textWelcome}</h1>
      <button ref={togleBunRef} className={classes.buttonns} onClick={clicked}>
        {textButton}
      </button>
    </div>
  );
};

export default React.memo(cockpit);
