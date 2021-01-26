import { connect } from 'react-redux'
import SignUp from './sign_up'
import { signup, removeErrors } from '../../actions/session_actions'




const msp = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session, //idk if we need to index more we might have to, imma pause here and try to get that user to log in by going to log in jsx
        formType: "Sign Up"
    }
}

const mdp = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(msp, mdp)(SignUp)