import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer'

import logger from 'redux-logger'  //"lets you replay problems as if they happened in your own browser" (quoted from github)
import thunk from 'redux-thunk' //" allows you to return functions, rather than just actions, within Redux...allows for delayed actions, including working with promises." (quoted from freecodecamp)

const configureStore = (preloadedState = {}) =>{
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}
export default configureStore