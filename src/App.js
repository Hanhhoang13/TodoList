import React, { useState } from 'react';
import './App.css';
import TodoForm from './Component/TodoForm';
import TodoList from './Component/Todolist';

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList]
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit:',formValues);
    const newTodo = {
      id: todoList.length + 1,
      ... formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      
      <h1>To Do List</h1>
     
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList className="List" todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
