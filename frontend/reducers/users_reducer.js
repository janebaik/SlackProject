// GOAL: to keep track of ALL users

import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            // look below if you forget what this means
            Object.assign(nextState,{[action.user.id]: action.user})
            return nextState
        default:
            return oldState;
    }
}

export default usersReducer
 // visually what it would look like
    // {
    //     1 {
    //         {user object}
    //     },
    //     ...,
    //     2{
    //         {current user object}
    //     }
    // }