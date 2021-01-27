// GOAL: to keep track of any error messages

import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERROR
} from '../actions/session_actions'
const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            // const nextState = Object.assign([], oldState)
            // nextState.push(action.errors)
            // action.errors
            return action.errors  
        case CLEAR_ERROR:
            return []
        case RECEIVE_CURRENT_USER:
            // debugger doesnt clear out all the way, only clears when logged in
            return []
        default:
            return oldState;
    }
}
export default sessionErrorsReducer