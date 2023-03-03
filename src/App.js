import Header from './components/Header';
import Todo from './components/To-do';
import Done from './components/Done';
import Goals from './components/Goals';
// import { useState } from 'react';
import './App.css';

function App() {
  // const [list, setList] = useState([])
// const listFromLocalStorage = JSON.parse(localStorage.getItem("list"))


  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Todo  />
        <Goals />
      </header>
    </div>
  );
}

export default App;
