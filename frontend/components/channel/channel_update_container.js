import { connect } from 'react-redux';
import { fetchChannel, fetchChannels, updateChannel } from '../../actions/channel_action'
import { closeModal} from '../../actions/modal_actions';
import ChannelUpdate from './channel_update';

const msp = (state, ownProps) => {
      
    return {
        topic: Object.values(state.channel)[0].topic,
        currentChannel: Object.values(state.channel),
        channels: Object.values(state.entities.channels)
    }
}
const mdp = (dispatch) => {
    return {
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        updateChannel: (channel) => dispatch(updateChannel(channel)),
        fetchChannels: () => dispatch(fetchChannels()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ChannelUpdate)