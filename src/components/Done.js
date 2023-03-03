import React from 'react';
import List from './List';
import { useState, useEffect } from 'react';

function Done(props) {
    const [finishedItems, setFinishedItems] = useState([])
    
   console.log(finishedItems)
useEffect(() => {
    setFinishedItems([
        ...finishedItems,
        {id: 1, items: props.finished}
    ])
}, [])


    return (
        <div>
            <h2>Things I have done!</h2>
            <List test="test" items={finishedItems}/>
        <p></p>

        </div>
    );
}

export default Done;