
import { createStore } from "redux";

// Store -> Globailsed State

// Action -> Increment (describe what you wanna do)

// Reducer -> call Action, based on action modify Store's {state}

// Dispatch -> Dispatch the action to reducer, reducer then update the store


// Action
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};


//reducer(call action + update state)
const counter = (state = 0, action) => {

  switch (action.type) {
    case "INCREMENT":
        return state + 1;

    case "DECREMENT":
        return state - 1;
        
    default :
        break;
  }
};

//store  holing all reducers
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter); // counter is state

//display on console
store.subscribe(() => console.log(store.getState()))

// Dispatch the action
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())

