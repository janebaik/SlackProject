import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home'

// when a user is signed in 
const msp = (state, ownProps) =>{
    return {

    }
}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Home)