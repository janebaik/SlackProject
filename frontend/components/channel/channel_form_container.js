import { connect } from 'react-redux';
import { createChannel, receiveChannelErrors} from '../../actions/channel_action'
import { closeModal } from '../../actions/modal_actions';

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
    return{
        createChannel: (channel) => dispatch(createChannel(channel)),
        receiveChannelErrors: ((errors) => dispatch(receiveChannelErrors(errors))),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ChannelForm)