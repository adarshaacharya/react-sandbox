import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './modules/combineReducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;
