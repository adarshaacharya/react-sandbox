import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import TodoItem from "./TodoItem";
import {TodosContext} from "../contexts/todos.context";

export default function TodoList() {
  const  todos  = useContext(TodosContext);

  if (todos.length < 1) return <div> No todos added..</div>;

  return (
    <Paper elevation={3}>
      <List>
        {todos.map((todo, i) => (
          <>
            <TodoItem todo={todo} key={todo.id} />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
