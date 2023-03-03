import React from 'react';
// import { useState } from 'react';

function List(props) {
//     const [mapMe, setMapMe] = useState(props.items)

    

    return (
        <div>
            <ul>
            {props.items ? props.items.map(item => (
            <li onClick={props.handler} key={item.id}>{item.items} </li>
            )) : null}
            </ul>
        </div>
    );
}

export default List;