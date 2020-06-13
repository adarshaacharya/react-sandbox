import { combineReducers } from "redux";

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


// make posts and user at global state store
const allReducers = combineReducers({
    posts : postsReducer,
    users : usersReducer
});


export default allReducers;