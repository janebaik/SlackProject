// GOAL: to keep track of any error messages

import {
    RECEIVE_CHANNEL_ERRORS,
    CLEAR_CHANNEL_ERROR
} from '../actions/channel_action'
const channelErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    //  
    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS:
             
            return action.errors
        case CLEAR_CHANNEL_ERROR:
            return []
        default:
            return oldState;
    }
}
export default channelErrorsReducer