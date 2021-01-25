import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store.js';
import {signup, login, logout} from './actions/session_actions'
import Root from "./components/root";

// entities: { users: { … } }
// errors: { session: Array(0) }
// session: { id: null }
document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        // debugger
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }, 
            errors: {
                session: [window.currentUser.errors]
            }
            // not sure if the errors is formatted correctly
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root')
    
    // testing
    window.login = login;
    window.signup = signup;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.currentUser

    // end of testing
    ReactDom.render(<Root store={store}/>, root)
});