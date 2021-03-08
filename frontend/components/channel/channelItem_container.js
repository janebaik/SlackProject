import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ChannelItem from "./channeItem";
import { fetchChannel, updateChannel, deleteChannelMembers,fetchChannels} from '../../actions/channel_action';

const msp = (state, ownProps) => {
    debugger
    return {
        channel: state.channel,
        // channelMembers: state.channelMembers,
        currentUser : state.session.id
    }
}
const mdp = (dispatch) => {
    //what is modal (make sure its add users)
    return {
        updateChannel: (channel) => dispatch(updateChannel(channel)),
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchChannels: () => dispatch(fetchChannels()),
        deleteChannelMembers: (id) => dispatch(deleteChannelMembers(id))
     }
}

export default connect(msp, mdp)(ChannelItem)