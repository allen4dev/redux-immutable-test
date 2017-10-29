import React from 'react';

const Todo = props => {
  return (
    <li
      className="Todo"
      onClick={() => props.handleToggle(props.id)}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
      }}>
      <p className="Todo-text">{props.text}</p>
    </li>
  );
};

export default Todo;
