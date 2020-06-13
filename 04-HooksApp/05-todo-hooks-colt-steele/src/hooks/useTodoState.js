import useLocalStorageState from "./useLocalStorageState";
import shortid from "shortid";

export default function useTodoState(initialTodos) {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([
      ...todos,
      { id: shortid.generate(), task: newTodoText, completed: false },
    ]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map(
      (todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo // if id mateches take {single todo} and update the properties completed or !complteted else leave todo as it is
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodo);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  };
}
