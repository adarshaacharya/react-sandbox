import React from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "../hooks/useInputState";

export default function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  };


  return (
    <form onSubmit={handleSubmit} style={{marginLeft : '2rem'}}>
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
