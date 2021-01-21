// GOAL: to keep track of all relational data
import {combineReducers} from 'redux'
import usersReducer from '../reducers/users_reducer'
// debugger
const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer