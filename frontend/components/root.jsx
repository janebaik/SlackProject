import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from './app'
import UserSearch from "./channel/user_search";

// Making fake users so that people can add them to their channels
const users = {
    fakeUser1 : { username: 'James' },
    fakeUser2 : { username: 'Justina' },
    fakeUser3 : { username: 'Sienna'},
    fakeUser4 : { username: 'Sydney' },
}

const Root = ({store}) => {
    // debugger
    return (
        <Provider store={store}>
            <HashRouter>
                {/* app is where we will define our routes */}
                <App/> 
                <UserSearch users={users}/>
                {/* ^^ Placed UserSearch here since we arent going to route to these forms */}
            </HashRouter>
        </Provider>
    )
}

export default Root;