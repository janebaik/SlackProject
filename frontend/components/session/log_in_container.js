import { connect } from 'react-redux'
import LogIn from './log_in'


const msp = (state, ownProps) =>{
    return {
    }
}

const mdp = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(msp,mdp)(LogIn)
