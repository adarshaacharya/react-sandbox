import { combineReducers } from 'redux';
import TodoReducer from './todo/todo.reducer'

const rootReducer = combineReducers({
    todos : TodoReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
