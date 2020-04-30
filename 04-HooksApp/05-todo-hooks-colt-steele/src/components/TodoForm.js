import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper elevation={3} style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo.." fullWidth/>
      </form>
    </Paper>
  );
}
