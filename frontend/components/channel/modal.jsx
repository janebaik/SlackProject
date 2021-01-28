import React from 'react';
import { closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ChannelForm from '../channel/channel_form_container';

function Modal({modal, closeModal}) {
    // debugger
    if (!modal){
        // debugger
        return null;
    }
    let component;
    switch (modal) {
        case "Create a Channel":
            // debugger
            component = <ChannelForm/>;
            break
        default:
            return null;
    }
    return (
        // our hidden component! Channels (ask megan about stopPropagation understand it a little bit but not to the full content )
        <div className='channel-form-head' onClick={closeModal}>
            <div className='channel-form' onClick={e => e.stopPropagation()}>
                {component} 
            </div>
        </div>
    )
}

const msp = (state, ownProps) => {
    // debugger
    return {
        modal: state.ui.modal
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal); //connected verison access to modal slice 