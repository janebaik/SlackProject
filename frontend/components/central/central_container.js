import { connect } from 'react-redux';
import { logout, deleteUser } from '../../actions/session_actions';
import Central from './central'
// import { deleteUser } from '../../actions/session_actions'
import {openModal} from '../../actions/modal_actions';
import { addUserChannel, fetchChannel } from '../../actions/channel_action'


// when a user is signed in 
const msp = (state, ownProps) =>{
     
    return {
        user: state.entities.users[state.session.id],
        channelMembers: Object.values(state.channel),
        currentUserId: state.session.id
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        deleteUser: (userId) => dispatch(deleteUser(userId))
    }
}

export default connect(msp, mdp)(Central)
