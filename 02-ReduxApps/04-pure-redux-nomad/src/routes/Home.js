import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { actionCreators } from "../store"
import Todo from "../components/Todo"

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState("")

 
  const onInputChange = (e) => {
    setText(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    addTodo(text)
    setText("")
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={text} onChange={onInputChange} />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return { todos: state }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)








/*

import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { actionCreators } from "../store"
import Todo from "../components/Todo"

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState("")

 
  const onInputChange = (e) => {
    setText(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    addTodo(text)
    setText("")
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={text} onChange={onInputChange} />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return { todos: state }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
*/