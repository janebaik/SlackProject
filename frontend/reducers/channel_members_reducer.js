
import { FETCH_MEMBERS } from "../actions/channel_action"

const channelMembersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case FETCH_MEMBERS:
            debugger
            return action.channelItem
        default:
            return oldState;
    }
}
export default channelMembersReducer