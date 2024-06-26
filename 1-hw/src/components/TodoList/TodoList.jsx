import React from 'react';
import './TodoList.css';

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
