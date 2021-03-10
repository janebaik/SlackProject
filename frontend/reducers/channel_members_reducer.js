
import { 
    FETCH_MEMBERS,
    REMOVE_CHANNEL_MEMBER,
    ADD_CHANNEL_USER
 } from "../actions/channel_action"


const channelMembersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case FETCH_MEMBERS:
            return action.channelItem
        case ADD_CHANNEL_USER:
             
            return Object.assign({}, nextState, { [action.user.id]: action.user })
        case REMOVE_CHANNEL_MEMBER:
            delete nextState[action.channelMemberId]
            return nextState
        default:
            return oldState;
    }
}
export default channelMembersReducer