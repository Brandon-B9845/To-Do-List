import React from 'react';
import { useState, useEffect } from 'react';

function Todo(props) {

    const [inputContents, setInputContents] = useState('')
    let listArr = []
    const handler = (event) => {
        setInputContents(event.target.value)
    }
    function handleClick(){
        listArr.push(inputContents)
        console.log(listArr)
    }


    return (
        <div>
            <h2>Things that I need to do still!</h2>
            <ul>

            </ul>
            
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