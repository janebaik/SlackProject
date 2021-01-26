import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const REMOVE_USER = 'REMOVE_USER';

const receiveCurrentUser = (currentUser) => {
    return {
        type: 'RECEIVE_CURRENT_USER',
        user: currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: 'LOGOUT_CURRENT_USER'
    }
}

const receiveErrors = (errors) =>{
    return{
        type: 'RECEIVE_SESSION_ERRORS',
        errors: errors   //note its an array
    }
}

export const clearErrors = () =>{
    return {
        type: 'CLEAR_ERROR'
    }
}

export const removeUser = (userId) => {
    return {
        type: 'REMOVE_USER',
        userId: userId
    }
}

export const login = (user) => (dispatch) =>{
    return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),  //if it passes
        errors => dispatch(receiveErrors(errors.responseJSON)))         //if it errors out
}

export const logout = () => (dispatch) => {
    return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
        errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const signup = (user) => (dispatch) => {
    return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const removeErrors = () => (dispatch) => {
    return SessionApiUtil.getUser()
        .then(() => dispatch(clearErrors()))
}

export const deleteUser = (userId) => (dispatch) => {
    return SessionApiUtil.deleteUser(userId)
        .then(() => dispatch(removeUser(userId)))
}

