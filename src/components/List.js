import React from 'react';
import { useState, useEffect } from 'react';

function List(props) {
    let nextId = 0
    const [listItems, setListItems] = useState([])
    const [items, setitems] = useState('')
    
    function handler(){
        setListItems()
    }


    return (
        <div>
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
             >Add item!</button>
            
        </div>
    );
}

export default List;