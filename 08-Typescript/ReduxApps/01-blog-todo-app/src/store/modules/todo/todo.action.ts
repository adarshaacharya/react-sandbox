import { CREATE_TODO, DELETE_TODO, Todo, TodoActions } from './todo.types';

export function createTodo(todo: Todo): TodoActions {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId: number): TodoActions {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}
