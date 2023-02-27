import Header from './components/Header';
import Todo from './components/To-do';
import Done from './components/Done';
import Goals from './components/Goals';
import './App.css';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Todo  />
        <Done />
        <Goals />
      </header>
    </div>
  );
}

export default App;
