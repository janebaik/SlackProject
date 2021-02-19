import { connect } from 'react-redux'
import SignUp from './sign_up'
import { signup, removeErrors, login} from '../../actions/session_actions'




const msp = (state, ownProps) => {
    //  
    return {
        user: {
            email: "",
            username: "",
        },
        errors: state.errors.session, //idk if we need to index more we might have to, imma pause here and try to get that user to log in by going to log in jsx
        formType: "Sign Up"
    }
}

const mdp = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(msp, mdp)(SignUp)