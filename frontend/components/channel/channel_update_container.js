import { connect } from 'react-redux';
import { createChannel, receiveChannelErrors, fetchChannels, addUserChannel } from '../../actions/channel_action'
import { closeModal, openModal } from '../../actions/modal_actions';
import ChannelUpdateForm from './channel_update';

const msp = (state, ownProps) => {
    debugger
    return {
        currentUser: state.session.id,
        currentChannel: Object.values(state.channel),
        channels: Object.values(state.entities.channels),
        channel: {
            name: "",
            description: "",
            status_public: true
        },
        errors: {
            channels: []
        },
        formType: "Create a Channel"
    }
}
const mdp = (dispatch) => {
    //what is modal (make sure its add users)
    return {
        addUserChannel: (ids) => dispatch(addUserChannel(ids)),
        fetchChannels: () => dispatch(fetchChannels()),
        createChannel: (channel) => dispatch(createChannel(channel)),
        receiveChannelErrors: ((errors) => dispatch(receiveChannelErrors(errors))),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ChannelUpdateForm)