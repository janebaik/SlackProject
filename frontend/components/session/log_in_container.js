import { connect } from 'react-redux'
import LogIn from '../session/log_in'
import { login, removeErrors } from '../../actions/session_actions'


// state
// { entities: { … }, session: { … }, errors: { … } }
// entities: { users: { … } }
// errors: { session: Array(0) }
// session: { id: null }


// { entities: { … }, session: { … }, errors: { … } }
// entities: { users: { … } }
// errors: { session: Array(0) }
// session:
// id: { id: 2, username: "Mona", email: "mona@gmail.com" }

// { entities: { … }, session: { … }, errors: { … } }
// entities: { users: { … } }
// errors:
// session: (22)[4, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, "["The username or password is invalid"]", Array(1), 401, "Unauthorized"]
// __proto__: Object
// session: { id: { … } }
// __proto__: Object

// ^^ is all the states so we can visually see it but you can earse it if its confusing now

const msp = (state, ownProps) => {
    //  
    return {
        errors: state.errors.session, //idk if we need to index more we might have to, imma pause here and try to get that user to log in by going to log in jsx
        formType: "Login"
    }
}

const mdp = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(msp, mdp)(LogIn)
