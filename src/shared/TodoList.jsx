import React from 'react';

import Todo from './Todo';

const TodoList = ({ items }) => {
  return (
    <ul className="TodoList">
      {items.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
};

export default TodoList;
