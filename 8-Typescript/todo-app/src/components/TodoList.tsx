import React from 'react';
import './TodoList.css';

interface TodoListProps {
  todos: {
    id: string;
    text: string;
  }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
