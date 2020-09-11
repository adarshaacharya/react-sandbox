import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/combineReducers';
import { createTodo } from 'store/modules/todo/todo.action';
import { TodoActions } from 'store/modules/todo/todo.types';

const AddTodo = () => {
  const [todoText, setTodoText] = React.useState('');

  const data = useSelector((state: RootState) => state.todos.data);
  const todoDispatch = useDispatch<Dispatch<TodoActions>>();

  function lastId(): number {
    return data[data.length - 1] ? data[data.length - 1].id + 1 : 1;
  }

  function addTodo(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    todoDispatch(
      createTodo({
        id: lastId(),
        description: todoText,
        checked: false,
      })
    );

    setTodoText('');
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input
            type="text"
            id="todo-text"
            required={true}
            value={todoText}
            onChange={(e): void => setTodoText(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTodo;
