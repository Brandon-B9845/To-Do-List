import React from 'react';
import List from './List';
import { useState, useEffect } from 'react';

function Done(props) {
    const [finishedItems, setFinishedItems] = useState([])

    useEffect(() => {
        console.log("I wanna die")
    }, [finishedItems])
    
   
console.log(finishedItems)
    return (
        <div>
            <h2>Things I have done!</h2>
            <List test="test" items={finishedItems}/>
        <p></p>

        </div>
    );
}

export default Done;