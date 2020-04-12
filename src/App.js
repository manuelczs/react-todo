import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';

function App() {
  let todos = [
    { text: 'texto' },
    { text: 'texto 2' },
    { text: 'texto 3' },
    { text: 'nothing by here' },
  ];

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
