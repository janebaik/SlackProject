import{connect} from 'react-redux';
import UserSearchForm from './user_search'
import { closeModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/session_actions';

// actions

const msp = (state, ownProps) =>{
    return{
        channel: Object.values(state.entities.channels),
        inputVal: "",
        users: Object.values(state.entities.users)
    }
}
const mdp = (dispatch) =>{
     
    return{
        fetchUsers: () => dispatch(fetchAllUsers()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(UserSearchForm)