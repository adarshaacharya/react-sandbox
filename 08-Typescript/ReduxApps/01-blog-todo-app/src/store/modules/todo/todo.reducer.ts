import { CREATE_TODO, DELETE_TODO, TodoState, TodoActions } from './todo.types';

const initialState: TodoState = {
  data: [],
};

export default function todoReducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}
