import { connect } from 'react-redux'
import SignUp from './sign_up'
import {signup} from '../../actions/session_actions'



const msp = (state, ownProps) => {
    return {
        user: {
            username:"",
            email:"",
            password:""
        }
    }
}

const mdp = dispatch => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SignUp)