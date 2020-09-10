import { INote } from './types';

export interface Action {
  type: 'ADD_NOTE' | 'DELETE_NOTE';
  payload?: any;
}

export const addNote = (note: INote): Action => ({
  type: 'ADD_NOTE',
  payload: note,
});

export const deleteNote = (id: string) : Action=> ({
  type: 'DELETE_NOTE',
  payload: id,
});
