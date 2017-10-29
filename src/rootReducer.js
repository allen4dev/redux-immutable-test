import { combineReducers } from 'redux-immutable';

import { Map } from 'immutable';

const INITIAL_STATE = Map({
  todos: Map(),
});

const todosReducer = (state = INITIAL_STATE.get('todos'), action = {}) => {
  switch (action.type) {
    case 'SET_TODOS':
      // return [...state, ...action.payload];
      // return state.concat(action.payload);
      return action.payload.reduce((todos, todo) => {
        return todos.set(todo.id, Map(todo));
      }, state);

    case 'SET_TODO':
      // return [...state, action.payload];
      // return state.push(action.payload);
      return state.set(action.payload.id, Map(action.payload));

    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
});

export default reducer;
