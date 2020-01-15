import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const {textWelcome, textButton, clicked} = props;

    return (
        <div>
            <h1>{textWelcome}</h1>
            <button
            className={classes.buttonns}
            onClick={clicked}
            >
            {textButton}
            </button>
        </div>
    )
}

export default cockpit;