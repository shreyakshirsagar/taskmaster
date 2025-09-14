import React, { useState } from 'react';
import { Check, X, Edit2, Save } from 'lucide-react';

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <button
          className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && <Check size={16} />}
        </button>
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            className="todo-edit-input"
            autoFocus
          />
        ) : (
          <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      
      <div className="todo-actions">
        <button
          className="todo-action-btn edit-btn"
          onClick={handleEdit}
          aria-label={isEditing ? 'Save changes' : 'Edit task'}
        >
          {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
        </button>
        
        <button
          className="todo-action-btn delete-btn"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete task"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
