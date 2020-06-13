import React, { useEffect } from "react";
import useTodoState from "../hooks/useTodoState";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Build a portfolio using Gatsby", completed: true },
  ];

  const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodoState(
    initialTodos
  );

  return (
    <div>
      <Paper style={paperStyles} elevation={3}>
        <AppBar position="static">
          <Toolbar>
            <Typography>TODOS APP WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>

        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const paperStyles = {
  padding: 0,
  margin: 0,
  height: "100vh",
};
