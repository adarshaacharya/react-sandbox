import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/combineReducers';
import { Todo, TodoActions } from 'store/modules/todo/todo.types';
import { deleteTodo } from 'store/modules/todo/todo.action';

const TodoList = () => {
  const data = useSelector((state: RootState) => state.todos.data);
  const todoDispatch = useDispatch<Dispatch<TodoActions>>();

  const handleDelete = (todoId: number) => {
    todoDispatch(deleteTodo(todoId));
  };

  if (data.length < 1) return <p className="center">No todos found!</p>;
  return (
    <>
      <ul>
        {data.map((todo: Todo) => (
          <li>
            {todo.description}
            <button className="danger" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
