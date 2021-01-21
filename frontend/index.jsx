import React from 'react';
import ReactDom from 'react-dom';
import {signup, login, logout} from './util/session_api_util.js'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    // testing
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    // end of testing
    ReactDom.render(<h1>hello</h1>, root)
});