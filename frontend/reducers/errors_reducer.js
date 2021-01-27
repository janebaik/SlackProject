//GOAL: responsible for combining our error reducers
import {combineReducers} from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_reducer';
import channelErrorsReducer from '../reducers/channel_error_reducer';
const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    channel: channelErrorsReducer
})

export default errorsReducer