import { combineReducers } from 'redux-immutable';

import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  todos: List(),
});

const todosReducer = (state = INITIAL_STATE.get('todos'), action = {}) => {
  switch (action.type) {
    case 'SET_TODOS':
      // return [...state, ...action.payload];
      return state.concat(action.payload);

    case 'SET_TODO':
      // return [...state, action.payload];
      return state.push(action.payload);

    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
});

export default reducer;
