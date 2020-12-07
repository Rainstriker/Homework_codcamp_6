import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { TodoList } from './ToDoHook/TodoList.js';

function App() {
  return (
    <Switch>
      <Route path="./">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
          </header>
        </div>
      </Route>
      <Route path="./ToDoHook/TodoList.js">
        <TodoList />
      </Route>
    </Switch>
    
  );
}

export default App;
