import React from 'react';
import { closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ChannelForm from '../channel/channel_form_container';
import UserSearchForm from "../channel/user_search_container";
import FetchUser from "../channel/fetch_user_container";
import ChannelUpdateForm from "../channel/channel_update_container";

function Modal({modal, closeModal}) {
    //  
    if (!modal){
        //  
        return null;
    }
    let component;
     
    switch (modal) {
        case "Create a Channel":
            //  
            component = <ChannelForm/>;
            break
        case "Add users":
             
            component = <UserSearchForm/>
            break
        case "Fetch users":
            component = <FetchUser />
            break
        case "Change topic":
            component = <ChannelUpdateForm/>
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