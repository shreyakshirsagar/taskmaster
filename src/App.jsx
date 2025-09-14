import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { Plus, Filter } from 'lucide-react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    if (newText.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      ));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          {/* Add Todo Section */}
          <div className="add-todo-section">
            <div className="input-group">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What needs to be done?"
                className="todo-input"
              />
              <button
                onClick={addTodo}
                className="add-btn"
                disabled={inputValue.trim() === ''}
              >
                <Plus size={20} />
                Add Task
              </button>
            </div>
          </div>

          {/* Filter Section */}
          {todos.length > 0 && (
            <div className="filter-section">
              <div className="filter-tabs">
                <button
                  className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All ({todos.length})
                </button>
                <button
                  className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
                  onClick={() => setFilter('active')}
                >
                  Active ({activeCount})
                </button>
                <button
                  className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
                  onClick={() => setFilter('completed')}
                >
                  Completed ({completedCount})
                </button>
              </div>
            </div>
          )}

          {/* Todo List */}
          <ToDoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          {/* Stats Section */}
          {todos.length > 0 && (
            <div className="stats-section">
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">{todos.length}</span>
                  <span className="stat-label">Total</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{activeCount}</span>
                  <span className="stat-label">Active</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{completedCount}</span>
                  <span className="stat-label">Completed</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
