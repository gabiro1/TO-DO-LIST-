import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'; // You can add your styles here

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} />
        </div>
    );
};

export default App;