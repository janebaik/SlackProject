import React from 'react';
import { Link } from 'react-router-dom';
import Channel from '../channel/channel_container';


// For those who Signed in Signed Ups main page 
class Central extends React.Component{
    constructor(props){
        super(props)
        
        // debugger
    }

    logoutUser(){
        this.props.logout();
         //if you want to earse all demo users  
        //  BONUS TODO: you can earse all the demo users after a certain amount of time
        // if (this.props.user.username.includes("demo")) {
        //     // debugger
        //     this.props.deleteUser(this.props.user.id)
        //     // debugger
        // }
    }

    openModal(modal){
        this.props.openModal(modal)
    }

    render(){
        return(
            <div>
                <div>
                    <nav className='channel-list-dropdown'>
                        Channels
                        <Channel /> 
                        {/* ^^ its the side bars */}
                    </nav>
                    <button onClick={() => this.openModal('Create a Channel')}>Create a channel</button>
                    <button onClick={() => this.openModal('Add users')}>Add users</button>

                </div>


                <button className="header-button" onClick={()=>this.logoutUser()}>Log Out</button>
            </div>
            
        )
    }
}


export default Central;