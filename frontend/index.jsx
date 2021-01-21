import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store.js';
import {signup, login, logout} from './actions/session_actions'
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    const store = configureStore();
    // testing
    window.login = login;
    window.signup = signup;
    window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // end of testing
    ReactDom.render(<Root store={store}/>, root)
});