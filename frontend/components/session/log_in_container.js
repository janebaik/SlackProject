import { connect } from 'react-redux'
import LogIn from '../session/log_in'
import {login} from '../../actions/session_actions'


const msp = (state, ownProps) =>{
    const userArrayed = Object.values(state.users);
    return {
        currentUser: userArrayed[state.session.id],
        formType: "Login"
    }
}

const mdp = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(msp,mdp)(LogIn)
