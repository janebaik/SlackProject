import React from 'react';
import { Link } from 'react-router-dom';

// currentUser: { id: 2, username: "Mona", email: "mona@gmail.com" }
// history: { length: 26, action: "POP", location: { … }, createHref: ƒ, push: ƒ, … }
// location: { pathname: "/slack-me", search: "", hash: "", state: undefined }
// logout: ƒ logout()
// match: { path: "/slack-me", url: "/slack-me", isExact: true, params: { … } }


class Central extends React.Component{
    constructor(props){
        super(props)
        debugger
        // debugger
    }

    deleteDemoUser(){
        if (this.props.currentUser.username === "demo"){
            debugger
            this.props.deleteUser(this.props.currentUser.id)
            // debugger
        }
    }
    render(){
        return(
            <div>
                {this.deleteDemoUser()}
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </div>
            
        )
    }
}


export default Central;