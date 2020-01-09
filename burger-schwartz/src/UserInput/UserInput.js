import React from "react";
    const input = (props) => {
        const {changed, value} = props;
        return (
            <input onChange = {changed} value = {value} type="text" />
        )
    }


    export default input;