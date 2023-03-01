import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';

function Todo(props) {



    return (
        <div>
            <h2>Things that I need to do still!</h2>
           <List />
            
        </div>
    );
}

export default Todo;

//When I come back I need to figure out why it is that the array element will not properly run through the map to render the list