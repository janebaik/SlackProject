import{connect} from 'react-redux';
import UserSearchForm from './user_search'
import { closeModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { addUserChannel } from "../../actions/channel_action";
// actions

const msp = (state, ownProps) =>{
    debugger
    return{
        channel: Object.values(state.entities.channels),
        inputVal: "",
        users: Object.values(state.entities.users),
        channelItem: []
    }
}
const mdp = (dispatch) =>{
     
    return{
        addUserChannel: (id) => dispatch(addUserChannel(id)),
        fetchUsers: () => dispatch(fetchAllUsers()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(UserSearchForm)