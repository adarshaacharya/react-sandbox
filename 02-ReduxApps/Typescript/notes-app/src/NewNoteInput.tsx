import React, { ChangeEvent } from 'react';
import { INote } from './types';

type Props = {
  addNote(note: INote): void;
};

const NewNoteInput: React.FC<Props> = ({ addNote}) => {
  const [note, setNote] = React.useState({
    id: '',
    text: '',
  });

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote({
      id: Date.now().toString(),
      text: event.target.value,
    });
  };

  const addNoteClick = () => {
    addNote(note);
  };

  return (
    <div>
      <input
        type="text"
        name="note"
        placeholder="Note"
        value={note.text}
        onChange={updateNote}
      />
      <button onClick={addNoteClick}>Add Note</button>
   
    </div>
  );
};

export default NewNoteInput;
