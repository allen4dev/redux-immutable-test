import { combineReducers } from 'redux';

const INITIAL_STATE = {
  todos: [],
};

const todosReducer = (state = INITIAL_STATE.todos, action = {}) => {
  switch (action.type) {
    case 'SET_TODOS':
      return [...state, ...action.payload];

    case 'SET_TODO':
      return [...state, action.payload];

    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
});

export default reducer;
