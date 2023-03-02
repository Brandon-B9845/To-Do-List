import React from 'react';
import List from './List';
import { useState, useEffect } from 'react'

function Goals(props) {
    const [goalsList, setGoalsList] =useState([])
    const [goals, setGoals] = useState('')
    let nextId = 0
    
    return (
        <div>
            <h2>Long-Term goals Bae-Bee</h2>
        <List items={goalsList}/>
        <input id="goals-input"
             type="text"
             placeholder='Add an item here'
             value={goals}
             onChange={e => setGoals(e.target.value)}    
             />
             <button onClick={() => {
                setGoals('')
                setGoalsList([
                    ...goalsList,
                    {id: nextId += 1, items: goals}
                ])

             }}>Gimme a goal!</button>
        </div>
    );
}

export default Goals;