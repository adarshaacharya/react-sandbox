import React, { useContext } from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../contexts/todos.context";

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState("");
  const  dispatch  = useContext(DispatchContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", task: value });
    reset();
  };

  return (
    <Paper elevation={3} style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo.."
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
