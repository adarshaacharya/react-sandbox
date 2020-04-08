import React from "react";
// 😀
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";  

import App from "./components/App";
import allReducers from "./reducers";


//store of reducers
const store = createStore(allReducers, applyMiddleware(thunk));
 
// wrap App reducer states : posts and user
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
