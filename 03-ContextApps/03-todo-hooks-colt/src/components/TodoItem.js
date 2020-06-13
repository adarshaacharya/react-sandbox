import React, { useContext , memo} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "../contexts/todos.context";

function TodoItem({ todo: { task, completed, id } }) {
  const  dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);


  return (
    <div style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm task={task} id={id} toggleEditForm={toggle} />
      ) : (
        <>
          <ListItem>
            <Checkbox
              checked={completed}
              tabIndex={-1}
              onClick={() => dispatch({ type: "TOGGLE_TODO", id: id })}
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
              <IconButton
                arial-label="delete"
                onClick={() => dispatch({ type: "REMOVE_TODO", id: id })}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      )}
    </div>
  );
}

export default memo(TodoItem);
