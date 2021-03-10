import { connect } from 'react-redux';
import {
    fetchChannels,
    fetchChannel,
    updateChannel,
    removeChannelErrors,
    deleteChannel,
    fetchChannelMembers,
    addUserChannel
} from '../../actions/channel_action'
import Channel from './channel';

const msp = (state, ownProps) =>{
     
    return {
       channels: Object.values(state.entities.channels),
       channel: Object.values(state.channel),
       channelMembers: state.channelMembers,
       currentUserId: state.session.id
    }
}

const mdp = (dispatch) =>{
    return{
        addUserChannel: (ids) => dispatch(addUserChannel(ids)),
        fetchChannels: () => dispatch(fetchChannels()),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        fetchChannelMembers: (id) => dispatch(fetchChannelMembers(id))

    }
}

export default connect(msp, mdp)(Channel)