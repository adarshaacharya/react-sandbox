import React from "react"
import { useParams } from "react-router-dom"

import { connect } from "react-redux"

const Detail = ({ todo }) => {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>Created at : {todo?.id}</h5>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps

  return {
    todo: state.find((todo) => todo.id === parseInt(id)),
  }
}

export default connect(mapStateToProps)(Detail)
