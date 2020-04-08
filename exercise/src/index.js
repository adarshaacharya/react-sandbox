import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import countReducer from "./reducers";

// create store of reducer
const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Binding App component with global store of state / reducers
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
