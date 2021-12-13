import React from 'react';
import ReactDOM from 'react-dom';
import TodoListPage from './pages/todoList'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <TodoListPage />
  </React.StrictMode>,
  document.getElementById('root')
);