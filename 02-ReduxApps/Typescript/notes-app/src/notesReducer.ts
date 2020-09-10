import { Action } from './actions';
import { INote } from './types';

export interface State {
  notes: INote[];
}

const initialState = {
  notes: [
    {
      text: '',
      id: '',
    },
  ],
};

export const notesReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};
