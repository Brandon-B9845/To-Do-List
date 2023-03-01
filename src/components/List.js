import React from 'react';
import { useState } from 'react';

function List(props) {
//     const [mapMe, setMapMe] = useState(props.items)
// console.log(mapMe)
    let fuckMe = props.items
    console.log(fuckMe)

    return (
        <div>
            <ul>
            {props.items ? props.items.map(item => (
            <li key={item.id}>{item.items}</li>
            )) : null}
            <li>{props.test}</li>
            </ul>
        </div>
    );
}

export default List;