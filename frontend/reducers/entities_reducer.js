// GOAL: to keep track of all relational data
import {combineReducers} from 'redux'
import usersReducer from '../reducers/users_reducer'
import channelReducer from '../reducers/channel_reducer'
// debugger
const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelReducer //(make sure channel_reducer is exported as channelReducer and import tha path too)
})

export default entitiesReducer