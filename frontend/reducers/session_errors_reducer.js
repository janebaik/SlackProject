// GOAL: to keep track of any error messages

import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from '../actions/session_actions'
const sessionErrorsReducer = (oldState = [], action) =>{
    Object.freeze(oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            const nextState = Object.assign([], oldState)
            nextState.push(action.errors)
            return nextState
        case RECEIVE_CURRENT_USER:
            return []
        default:
            return oldState;
    }
}
export default sessionErrorsReducer