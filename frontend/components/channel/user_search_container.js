import{connect} from 'react-redux';
// actions

const msp = (state, ownProps) =>{
    debugger
    return{
        inputVal: ""
    }
}
const mdp = (dispatch) =>{
    return{
        // add members (all the users using the user id)
    }
}

export default connect(msp, mdp)(UserSearch)