import * as api from './api';

export function setTodos(todos) {
  return {
    type: 'SET_TODOS',
    payload: todos,
  };
}

export function setTodo(todo) {
  return {
    type: 'SET_TODO',
    payload: todo,
  };
}

export function getTodos() {
  return async dispatch => {
    const todos = await api.fetchTodos();

    dispatch(setTodos(todos));

    return todos;
  };
}

export function postTodo(text) {
  return async dispatch => {
    const todo = await api.addTodo(text);

    dispatch(setTodo(todo));

    return todo;
  };
}
