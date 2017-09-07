import uuidv4 from 'uuid/v4';

import { SUBMIT_TEXT, REMOVE_FINISHED, UPDATE_TEXT, TOGGLE_STATE } from '../actions/todos';

const initialState = {
  inputValue: '',
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TEXT:
      return {
        ...state,
        inputValue: '',
        items: [
          ...state.items,
          {
            title: state.inputValue,
            isDone: false,
            date: new Date(),
            id: uuidv4(),
          },
        ],
      };
    case REMOVE_FINISHED:
      return {
        ...state,
        items: state.items.filter(item => item.isDone === false),
      };
    case UPDATE_TEXT:
      return {
        ...state,
        inputValue: action.text,
      };
    case TOGGLE_STATE:
      return {
        ...state,
        items: state.items.map(
          todo => (todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo),
        ),
      };
    default:
      return state;
  }
};

export default reducer;
