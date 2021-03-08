// visually what it would look like
// you just need to see what the action.channel is 
import {REMOVE_CHANNEL_MEMBER} from "../actions/channel_action"
import { RECEIVE_SINGLE_CHANNEL,
         RECEIVE_ALL_CHANNEL,
         REMOVE_CHANNEL } from '../actions/channel_action'

const channelReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_CHANNEL:
            return Object.assign({}, nextState, action.channels)
        case REMOVE_CHANNEL:
            delete nextState[action.channelId]
            return nextState
        default:
            return oldState;
    }
}

export default channelReducer

//  
//channelid: {
//         id: 1,
//             nameChannel: "general",
//                 statusPublic: "true"
//         userId: [1, 2, 3],
//             messageId: [1, 2],
 
//             },
//     2: {
//         id: 2,
//             nameChannel: "privateChannel",
//                 statusPublic: "false",
//                     userId: [1, 2]   //(only those who are added)
//         messageId: []
//     }

