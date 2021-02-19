import * as ChannelApiUtil from '../util/channel_api_util'

export const RECEIVE_ALL_CHANNEL = 'RECEIVE_ALL_CHANNEL'
export const RECEIVE_SINGLE_CHANNEL = 'RECEIVE_SINGLE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERROR = 'CLEAR_CHANNEL_ERROR';

// just a note idk
// edit action is responsible for rendering the view
// update action is responsible for interacting with the model(db updates etc)
const receiveAllChannels = (channels) =>{
    return{
        type: 'RECEIVE_ALL_CHANNEL', 
        channels: channels
    }
}
const receiveSingleChannel = (channel) => {
    //  
    return{
        type: 'RECEIVE_SINGLE_CHANNEL',
        channel: channel
    }
}

const removeSingleChannel = (channelId) => {
    return{
        type: 'REMOVE_CHANNEL',
        channelId: channelId
    }
}

export const receiveChannelErrors = (errors) => {
    return{
        type: 'RECEIVE_CHANNEL_ERRORS',
        errors:errors
    }
}

const clearChannelErrors = () => {
    return {
        type: 'CLEAR_CHANNEL_ERROR'
    }
}
// creating channel

export const fetchChannels = () => (dispatch) => {
    return ChannelApiUtil.getChannels()
        .then((channels) => dispatch(receiveAllChannels(channels)),
            (errors) => dispatch(receiveChannelErrors(errors.responseJSON)))
}

export const fetchChannel = (channelId) => (dispatch) =>{
    return ChannelApiUtil.getChannel(channelId)
        .then((channel) => dispatch(receiveSingleChannel(channel)),
            (errors) => dispatch(receiveChannelErrors(errors.responseJSON)))
}


export const createChannel = (channel) => (dispatch) =>{
    //  
    return ChannelApiUtil.createChannel(channel)
        .then((channel) => dispatch(receiveSingleChannel(channel)),
            (errors) => dispatch(receiveChannelErrors(errors.responseJSON)))
}

export const updateChannel = (channel) => (dispatch) => {
    return ChannelApiUtil.updateChannel(channel)
        .then((channel) => dispatch(receiveSingleChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON)))

}

export const removeChannelErrors = () => (dispatch) => {
    return SessionApiUtil.getChannel()
        .then(() => dispatch(clearChannelErrors()))
}

export const deleteChannel = (channelId) => (dispatch) => {
    return ChannelApiUtil.deleteChannel(channelId)
        .then(() => dispatch(removeSingleChannel(channelId)),
            errors => dispatch(receiveChannelErrors(errors.responseJSON)))
}

