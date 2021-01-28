// GOAL: to keep track of any error messages

import {
    RECEIVE_CHANNEL_ERRORS,
    CLEAR_CHANNEL_ERROR
} from '../actions/channel_action'
const channelErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            // debugger
            // const nextState = Object.assign([], oldState)
            // nextState.push(action.errors)
            // action.errors
            return action.errors
        case CLEAR_CHANNEL_ERROR:
            return []
        default:
            return oldState;
    }
}
export default channelErrorsReducer