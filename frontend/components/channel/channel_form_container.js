import { connect } from 'react-redux';
import { createChannel, receiveChannelErrors} from '../../actions/channel_action'
import { closeModal, openModal } from '../../actions/modal_actions';

import ChannelForm from './channel_form';

const msp = (state, ownProps) =>{
    debugger
    return {
        channel: {
            name:"",
            description:"",
            status_public: true
        },
        errors:{
            channels:[]
        },
        formType: "Create a Channel"
    }
}
const mdp = (dispatch) =>{
    debugger //what is modal (make sure its add users)
    return{
        createChannel: (channel) => dispatch(createChannel(channel)),
        receiveChannelErrors: ((errors) => dispatch(receiveChannelErrors(errors))),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ChannelForm)