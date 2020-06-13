import React, { createContext, useReducer } from "react";

import TodoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Create a gatsby site", completed: true },
  { id: 2, task: "Mow the lawn using goats", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, TodoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
