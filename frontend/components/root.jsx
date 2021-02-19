import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from './app'


const Root = ({store}) => {
    // debugger
    return (
        <Provider store={store}>
            <HashRouter>
                {/* app is where we will define our routes */}
                <App/> 
            </HashRouter>
        </Provider>
    )
}

export default Root;