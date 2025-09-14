import React from 'react';
import ToDoItem from './ToDoItem';
import { List } from 'lucide-react';

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <List size={48} className="empty-icon" />
        <h3>No tasks yet</h3>
        <p>Add your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
