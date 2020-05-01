import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../contexts/todos.context";

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const  dispatch  = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => { 
    e.preventDefault();
    dispatch({ type: "EDIT_TODO", id: id, newTask: value });
    reset();
    toggleEditForm();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "2rem" }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
