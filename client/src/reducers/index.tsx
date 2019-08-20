import { combineReducers } from 'redux'
import restaurants from './restaurants'

const rootReducer = combineReducers({
    restaurants
});
export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>