import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';

function Todo(props) {
    let nextId = 0
    const [listItems, setListItems] = useState([''])
    const [items, setitems] = useState('')

    useEffect(() => {
        const data = localStorage.getItem('TO_DO_LIST')
        if (data !== undefined){ 
            setListItems(JSON.parse(data))
        }
    }, [])
    
    useEffect(() => {
        if(listItems.length > 0){
            localStorage.setItem('TO_DO_LIST', JSON.stringify(listItems))
        }
       
    }, [listItems])
    

    return (
        <div>
            <h2>Things that I need to do still!</h2>
           <List test="test" items={listItems}/>
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
                    {id: nextId += 1, items: items}
                ])

             }}
             >Add item!</button>
            
        </div>
    );
}

export default Todo;

//When I come back I need to figure out why it is that the array element will not properly run through the map to render the list