import { connect } from 'react-redux';
import { logout, deleteUser } from '../../actions/session_actions';
import Central from './central'
// import { deleteUser } from '../../actions/session_actions'


// when a user is signed in 
const msp = (state, ownProps) =>{
    // debugger
    return {
        user: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        deleteUser: (userId) => dispatch(deleteUser(userId))
    }
}

export default connect(msp, mdp)(Central)
