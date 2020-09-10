import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from './actions';
import NewNoteInput from './NewNoteInput';
import { State } from './notesReducer';
import { INote } from './types';

function App() {
  const notes = useSelector<State, State['notes']>((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note: INote) => {
    dispatch(addNote(note));
  };

  const onDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.length > 1 &&
          notes.map((note, i) => (
            <li key={i}>
              <>
                {note.id} says
                {note.text}
                <button onClick={() => onDeleteNote(note.id)}>delete</button>
                <hr />
              </>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;

// in redux state is updated by dispatching actions
