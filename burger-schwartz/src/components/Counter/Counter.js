import React, {useState, useEffect} from 'react';
import Aux from '../../hoc/Aux';
const counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Kliknięto: + ${counter}`
    })
    return (
        <Aux>
            <div>Licznik wynosi: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Wincyj</button>
        </Aux>
    )
}

export default counter;