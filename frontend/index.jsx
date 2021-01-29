import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store.js';
import Root from "./components/root";

// testing
import { fetchChannels, fetchChannel, createChannel, updateChannel, deleteChannel } from './actions/channel_action';
import { signup, login, logout } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    // debugger
    if (window.currentUser) {
        // debugger
        // persist user
        const preloadedState = {
            session: { id: window.currentUser.id  },
            entities: {
                // TODO:may want to change this line 20(when you refresh all the users are refreshed)
                users: { [window.currentUser.id]: window.currentUser },
                // channels: { [window.currentChannel]: window.currentChannel }
                // if you want this to persist then go to root.html.erb
            }, 
            errors: {
                session: [window.currentUser.errors]
            }
            // not sure if the errors is formatted correctly
        };
        // debugger
        store = configureStore(preloadedState);
        delete window.user;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root')
    
    // testing
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;

    // window.dispatch = store.dispatch;
    // window.getState = store.getState;

    // window.fetchChannels = fetchChannels;
    // window.fetchChannel = fetchChannel;
    // window.createChannel = createChannel;
    // window.updateChannel = updateChannel ;
    // window.deleteChannel = deleteChannel;
    // dispatch(fetchChannels()).then(console.log)   wrote something along these lines
    // https://stackoverflow.com/questions/19606142/routing-error-uninitialized-constant-api-rails got this error so i thought that something is wrong with my backend
 
    

    // end of testing
    ReactDom.render(<Root store={store}/>, root)
});