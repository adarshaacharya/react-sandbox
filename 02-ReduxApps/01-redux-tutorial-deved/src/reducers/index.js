import counterReducer from './Counter';
import loggedReducer from './isLogged';

import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter : counterReducer,
    isLoggedIn : loggedReducer
});


export default allReducers;