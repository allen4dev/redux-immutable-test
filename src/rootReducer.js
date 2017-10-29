import { combineReducers } from 'redux';

const todosReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_TODOS':
      return [...state, ...action.payload];

    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todosReducer,
});

export default reducer;
