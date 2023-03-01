import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';

function Todo(props) {
    let nextId = 0
    const [listItems, setListItems] = useState([])
    const [items, setitems] = useState('')
    
    function handler(){
        setListItems()
    }


    return (
        <div>
            <h2>Things that I need to do still!</h2>
            <ul>
            {listItems.map(item => (
            <li key={item.id}>{item.items}</li>
            ))}

            </ul>
            <input id="goals-input"
             type="text"
             placeholder='Add an item here'
             value={items}
             onChange={e => setitems(e.target.value)}
             
             />
             <button onClick={() => {
                setitems('')
                setListItems([
                    ...listItems,
                    {id: nextId++, items: items}
                ])

             }}
             >Fuck</button>
            
        </div>
    );
}

export default Todo;

//When I come back I need to figure out why it is that the array element will not properly run through the map to render the list