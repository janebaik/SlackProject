import{connect} from 'react-redux';
import UserSearchForm from './user_search'
import { closeModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import { addUserChannel, fetchChannelMembers, fetchChannels } from "../../actions/channel_action";
// actions

const msp = (state, ownProps) =>{
      
    return{
        channels: Object.values(state.entities.channels),
        inputVal: "",
        users: Object.values(state.entities.users),
        channelItem: Object.values(state.channel),
        currentUser: state.session.id,
        channelMembers: Object.values(state.channelMembers)    
    }
}
const mdp = (dispatch) =>{
     
    return{
        addUserChannel: (id) => dispatch(addUserChannel(id)),
        fetchUsers: () => dispatch(fetchAllUsers()),
        fetchChannelMembers: (id) => dispatch(fetchChannelMembers(id)),
        closeModal: () => dispatch(closeModal()),
        fetchChannels: () => dispatch(fetchChannels()),

    }
}

export default connect(msp, mdp)(UserSearchForm)