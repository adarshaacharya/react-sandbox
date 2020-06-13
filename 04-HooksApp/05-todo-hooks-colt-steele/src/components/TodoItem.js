import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function TodoItem({
  todo: { task, completed, id },
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <div style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          task={task}
          id={id}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <ListItem>
            <Checkbox
              checked={completed}
              tabIndex={-1}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton arial-label="edit">
                <EditIcon onClick={toggle} />
              </IconButton>
              <IconButton arial-label="delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      )}
    </div>
  );
}

export default TodoItem;
