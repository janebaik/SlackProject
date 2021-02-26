import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ChannelItem from "./channeItem";
import { fetchChannel, updateChannel, deleteChannel, fetchChannels } from '../../actions/channel_action';

const msp = (state, ownProps) => {
    debugger
    return {
        // channel: state.entities.channels
    }
}
const mdp = (dispatch) => {
    //what is modal (make sure its add users)
    return {
        updateChannel: (channel) => dispatch(updateChannel(channel)),
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchChannels: () => dispatch(fetchChannels())
     }
}

export default connect(msp, mdp)(ChannelItem)