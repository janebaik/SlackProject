// GOAL: to keep track of current user

import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions'
import merge from 'lodash/merge';


const sessionReducer = (oldState={id:null}, action) => {
    Object.freeze(oldState);
    const nextState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            // TODO: probably want to add debuggers here just in case (maybe look at what state consist of)
            nextState.id = action.user//got from line 10
            return nextState
        case LOGOUT_CURRENT_USER:
            nextState.id = null
            return nextState
        default:
            return oldState
    }
}

export default sessionReducer;