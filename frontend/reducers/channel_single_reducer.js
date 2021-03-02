// visually what it would look like
// you just need to see what the action.channel is 

import {
    RECEIVE_SINGLE_CHANNEL,
    REMOVE_CHANNEL
} from '../actions/channel_action'

const channelReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SINGLE_CHANNEL:
             
            // return { [action.channel.id]: action.channel}
            return { [action.channel.id]: action.channel }
        default:
            return oldState;
    }
}

export default channelReducer
