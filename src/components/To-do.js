import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';

function Todo(props) {

    const [inputContents, setInputContents] = useState('')
    let listArr = ["fuck", "me" , "daddy"]
    const handler = (event) => {
        setInputContents(event.target.value)
    }
    function handleClick(){
        listArr.push(inputContents)
        console.log(listArr)
    }
    useEffect(() => {
     console.log("rendered")   
    },[inputContents])

    return (
        <div>
            <h2>Things that I need to do still!</h2>
            {
            listArr.map(listItem => <List items={listItem} />
            )}
            <input id="goals-input"
             type="text"
             placeholder='Add an item here'
             onChange={handler}
             />
             <button onClick={handleClick}>Fuck</button>
            
        </div>
    );
}

export default Todo;

//When I come back I need to figure out why it is that the array element will not properly run through the map to render the list