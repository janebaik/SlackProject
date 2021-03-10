import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ChannelItem from "./channeItem";
import { fetchChannel, updateChannel, deleteChannelMembers,fetchChannels} from '../../actions/channel_action';
import { fetchAllUsers } from '../../actions/session_actions';


const msp = (state, ownProps) => {
     
    return {
        channel: state.channel,
        channelMembers: Object.values(state.channelMembers),
        currentUser : state.session.id,
        users: Object.values(state.entities.users)
    }
}
const mdp = (dispatch) => {
    //what is modal (make sure its add users)
    return {
        fetchUsers: () => dispatch(fetchAllUsers()),

        updateChannel: (channel) => dispatch(updateChannel(channel)),
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchChannels: () => dispatch(fetchChannels()),
        deleteChannelMembers: (id) => dispatch(deleteChannelMembers(id))
     }
}

export default connect(msp, mdp)(ChannelItem)