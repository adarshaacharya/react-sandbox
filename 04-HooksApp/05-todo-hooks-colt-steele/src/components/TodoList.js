import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if(todos.length<1) return <div> No todos added..</div> 

  return (
    <Paper elevation={3}>
      <List>
        {todos.map((todo, i) => (
          <>
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />

            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
