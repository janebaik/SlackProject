//GOAL: combines all reducers
import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';//keep track of relation data (like userSSSS)
import sessionReducer from './session_reducer'; //keeps track of current user
import errorsReducer from './errors_reducer'; //keep track of errors

// debugger
const rootReducer = combineReducers({
    entities:entitiesReducer,
    session:sessionReducer,
    errors:errorsReducer
})


export default rootReducer;