import React from "react";
import { connect } from "react-redux";

// Import actions creator
import { increment, decrement } from "../actions";

const Counter = (props) => {
  return (
    <div>
      {props.count}
      <br />
      <button onClick={props.increment}> Add</button>
      <button onClick={props.decrement}> Subract</button>
    </div>
  );
};

// Take data inside reducerStore and change into props
const mapStateToProps = (state) => {
  return { count: state.count };
};

// connect state + action creator(fun) with Component
export default connect(mapStateToProps, {
  increment: increment,
  decrement: decrement,
})(Counter);
