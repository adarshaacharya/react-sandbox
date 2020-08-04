import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { ITodo } from './todo.model';

const App: React.FC = () => {
  const localTodos = JSON.parse(localStorage.getItem('types:todo')!);
  const [todos, setTodos] = React.useState<ITodo[]>(localTodos || []);

  const addTodo = (text: string) => {
    const newTodo = {
      id: uuidv4(),
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  React.useEffect(() => {
    window.localStorage.setItem('types:todo', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='App'>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
