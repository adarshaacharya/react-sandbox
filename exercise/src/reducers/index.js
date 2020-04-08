import { combineReducers } from "redux";
import { Count } from "./countReducer";

const countReducer = combineReducers({
  count: Count,
});

export default countReducer;
