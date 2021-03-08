import React from 'react';
import { Link } from 'react-router-dom';
import Channel from '../channel/channel_container';


// For those who Signed in Signed Ups main page 
class Central extends React.Component{
    constructor(props){
        super(props)
    }

    logoutUser(){
        this.props.logout();
    }

    openModal(modal){
        this.props.openModal(modal)
    }

    render(){
        return(
            <div>
                <p>Search bar</p>
                <div className="channel-nav-master">
                    <nav className='channel-list-dropdown'>
                        <p className="channel-nav-header">Channels</p>
                    </nav>
                    <button className="add-channel" onClick={() => this.openModal('Create a Channel')}>+</button>
                </div>
                <div className="channels">
                    <Channel />
                </div>
                <div className="channel-nav-master" onClick={() => this.openModal('Create a Channel')}>
                    <button className="add-last-channel">+</button>
                    <p>Add channels</p>
                </div>
                <button className="header-button" onClick={() => this.logoutUser()}>Log Out</button>

            </div>
        )
    }
}


export default Central;