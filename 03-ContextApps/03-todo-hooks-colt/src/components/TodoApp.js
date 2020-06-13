import React from "react";
import { TodosProvider } from "../contexts/todos.context";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
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
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
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
