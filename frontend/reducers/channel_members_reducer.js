
import { 
    FETCH_MEMBERS,
    REMOVE_CHANNEL_MEMBER
 } from "../actions/channel_action"

const channelMembersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case FETCH_MEMBERS:
            return action.channelItem
        case REMOVE_CHANNEL_MEMBER:
            debugger
            delete nextState[action.channelMemberId]
            debugger
            return nextState
        default:
            return oldState;
    }
}
export default channelMembersReducer