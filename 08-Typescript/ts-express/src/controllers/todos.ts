import { RequestHandler } from 'express';
import { Todo } from '../models/Todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.json({ msg: 'Created new todo', creasstedTodo: newTodo }).status(200);
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) throw new Error("Couldn't find todo.");

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  res.json({
    message: 'updated!!',
    updaredTodo: TODOS[todoIndex],
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) throw new Error("Couldn't find todo.");

  TODOS.splice(todoIndex, 1);

  res.json({
    message: 'Todo deleted',
  });
};
