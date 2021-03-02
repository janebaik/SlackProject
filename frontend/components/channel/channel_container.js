import { connect } from 'react-redux';
import {
    fetchChannels,
    fetchChannel,
    updateChannel,
    removeChannelErrors,
    deleteChannel
} from '../../actions/channel_action'
import Channel from './channel';

const msp = (state, ownProps) =>{
    debugger
    return {
       channels: Object.values(state.entities.channels),
       channel: Object.values(state.channel),
       currentUserId: state.session.id
    }
}

// fetchChannels()
// fetchChannel(channelId)
// createChannel(channel)
// updateChannel(channel)
// removeChannelErrors()  -> a channel actually doesnt get removed completely 
const mdp = (dispatch) =>{
    return{
        fetchChannels: () => dispatch(fetchChannels()),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        updateChannel: (channel) => dispatch(updateChannel(channel))    }
}

export default connect(msp, mdp)(Channel)