import { connect } from 'react-redux';
import FetchUser from './fetch_user'
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { addUserChannel, fetchChannelMembers } from "../../actions/channel_action";
// actions

const msp = (state, ownProps) => {
     debugger
    return {
        channel: Object.values(state.entities.channels),
        inputVal: "",
        users: Object.values(state.entities.users),
        channelItem: Object.values(state.channel),
        channelMembers: Object.values(state.channelMembers) 
    }
}
const mdp = (dispatch) => {

    return {
        openModal: (modal) => (dispatch(openModal(modal))),
        addUserChannel: (id) => dispatch(addUserChannel(id)),
        fetchUsers: () => dispatch(fetchAllUsers()),
        fetchChannelMembers: (channelId) => dispatch(fetchChannelMembers(channelId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(FetchUser)