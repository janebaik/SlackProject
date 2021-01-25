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
    }

    render(){
        return(
            <div>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </div>
            
        )
    }
}


export default Central;