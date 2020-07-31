import * as React from 'react';
import './AddTodo.css';

interface AddTodoProps {
  addTodo: (text: string) => void; // look at app component
}

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const textInputRef = React.useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addTodo(enteredText);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} required={true} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default AddTodo;
