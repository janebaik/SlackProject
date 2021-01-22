import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Central from './central'

// when a user is signed in 
const msp = (state, ownProps) =>{
    debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Home)
