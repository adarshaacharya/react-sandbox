import { createStore } from "redux"
import {
  createAction,
  createReducer,
  configureStore,
} from "@reduxjs/toolkit"

const addTodo = createAction("ADD")
const deleteTodo = createAction("DELETE")

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteTodo]: (state, action) =>
    state.filter((todo) => action.payload !== todo.id),
})

// store for
const store = configureStore({ reducer })

export const actionCreators = {
  addTodo,
  deleteTodo,
}

export default store

/*

import { createStore } from "redux"
import { createAction } from "@reduxjs/toolkit"

const ADD = "ADD"
const DELETE = "DELETE"

// action creators
const addTodo = (text) => {
  return {
    type: ADD,
    text,
  }
}

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  }
}

// modifier function based on action
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state]

    case DELETE:
      return state.filter((todo) => action.id !== todo.id)

    default:
      return state
  }
}

// store for
const store = createStore(reducer)

export const actionCreators = {
  addTodo,
  deleteTodo,
}

export default store



*/
