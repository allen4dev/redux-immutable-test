import React from 'react';

const Todo = props => {
  return (
    <li className="Todo">
      <p className="Todo-text">{props.text}</p>
    </li>
  );
};

export default Todo;
