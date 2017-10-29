import * as api from './api';

export function setTodos(todos) {
  return {
    type: 'SET_TODOS',
    payload: todos,
  };
}

export function getTodos() {
  return async dispatch => {
    const todos = await api.fetchTodos();

    dispatch(setTodos(todos));

    return todos;
  };
}
