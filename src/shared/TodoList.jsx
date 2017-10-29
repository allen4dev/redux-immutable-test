import React from 'react';

import Todo from './Todo';

const TodoList = ({ items, handleToggle }) => {
  return (
    <ul className="TodoList">
      {items.map(todo => (
        <Todo
          key={todo.get('id')}
          {...todo.toJS()}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
