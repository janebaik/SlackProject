import React from 'react';


class ChannelItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoclicked : true,
            aboutclicked: false,
            members: false
        }
    }
    componentDidMount(){
        this.props.fetchUsers()
    }

    handleAddUser() {
        this.props.fetchChannel(this.props.channelId)
        this.props.openModal('Add users')
    }
    viewMembers() {
        this.props.fetchChannel(this.props.channelId)
        this.props.openModal('Fetch users')
    }
    
    updateChannelInfo() {
        //channels controller line 27
        this.props.fetchChannel(this.props.channelId);
        this.props.openModal('Change topic');
    }

    handleLeaveChannel(){
        Object.values(this.props.channel).map((objectChannel) => {
            Object.values(objectChannel.channel_member).map((item) => {
                if (item.user_id === this.props.currentUser){
                    this.props.deleteChannelMembers(item.id)
                    ///TODO
                    // might have to somehow make the channel disappear here and then re-render anythor channel 
                }
            })
        })
    }

    handleClickMembers(){
        this.setState({ ['members']: !this.state.members })

    }
    handleClickAbout(){
        this.setState({ ['aboutclicked']: !this.state.aboutclicked })
    }

    handleInfo(){
        this.setState({['infoclicked']: !this.state.infoclicked})
    }
    
    render() {
        const members = this.props.channelMembers.map((user, i) => {
            const finalarray = []
            this.props.users.map((currentUser) => {
                if (currentUser.id === user.user_id){
                    return finalarray.push(<div className="username" key={user.id}>{currentUser.username}</div>)
                }
            })
            return <div key={i}>{finalarray}</div>
        })
        return (
            <div>
                <div className="channel-header">
                    <div className="channel-item-header">
                        <p>#{this.props.name}</p>
                        <a className="topic" id="topic" onClick={() => this.updateChannelInfo(this.props.channelId)}>{this.props.topic.length > 0 ? this.props.topic : "Add a topic"}</a>
                    </div>
                    <div className="channel-icon-header">
                        <div className="tooltip">
                            <img onClick={() => this.viewMembers()} className="icon-channel" src={window.MemberIcon} alt="member-icon" />
                            <div className="tooltiptext">View Members</div>
                        </div>
                        <div className="tooltip">
                            <img onClick={() => this.handleAddUser()} className="icon-channel" src={window.addMemberIcon} alt="member-add-icon" />
                            <div className="tooltiptext">Add Members</div>
                        </div>
                        <div className={this.state.infoclicked ? "tooltip" : "tooltip-last"}>
                            <img onClick={() => this.handleInfo()} className="icon-channel" src={window.infoicon} alt="info-icon" />
                            {this.state.infoclicked ? <div className="tooltiptext">Close Channel Info</div> : <div className="tooltiptext-last">Channel Info</div>}
                        </div>
                            {this.state.infoclicked ?
                                <div className="detail">
                                    <div className="detail-header">
                                        <div className="detail-header-first">
                                            <p>Details</p>
                                            <p>#{this.props.name}</p>
                                        </div>
                                    <button onClick={() => this.handleInfo()} className="main-modal-button">X</button>
                                    </div>
                                    <div className="icons">
                                        <div className="icon-info">
                                            <div className="tooltip">
                                                <img onClick={() => this.handleAddUser()} className="icon-channel" src={window.addMemberIcon} alt="member-add-icon" />
                                                <div className="tooltiptext">Add people to the #{this.props.name}</div>
                                            </div>
                                            <p>Add</p>
                                        </div>
                                        <div className="icon-info">
                                            <div className="tooltip">
                                                {/* TODO */}
                                                <img className="icon-channel" src={window.SearchIcon} alt="info-icon" />
                                                <div className="tooltiptext">Find in #{this.props.name}(will connect to the search bar)</div>
                                            </div>
                                        <p>Find</p>
                                        </div>
                                        {this.props.name === "General" ?
                                            <div className="icon-info">
                                                <div className="tooltip-last-info">
                                                    <img className="icon-channel" src={window.Logout} alt="info-icon" />
                                                    <div className="tooltiptext-last-info">User can't Leave #{this.props.name}</div>
                                                </div>
                                                <p className="signingout-unquie">Leave</p>
                                            </div>
                                            : 
                                            <div className="icon-info">
                                                <div className="tooltip-last-info">
                                                    <img onClick={() => this.handleLeaveChannel()} className="icon-channel" src={window.Logout} alt="info-icon" />
                                                    <div className="tooltiptext-last-info">Leave #{this.props.name}</div>
                                                </div>
                                            <p className="signingout">Leave</p>
                                            </div>
                                        }
                                        
                                    </div>
                                    
                                    <div onClick={() => this.handleClickAbout()}className="about-channels">
                                        <p> About </p>
                                        {this.state.aboutclicked ? <p>▲</p> : <p>▼</p>}
                                    </div>
                                    {this.state.aboutclicked ?
                                    <div className="topic-about-border">
                                        <div className="topic-about">
                                           <div className="topic-options">
                                            <p>Topic</p>
                                            <p className="topic">{this.props.topic}</p>
                                            <p className="edit" onClick={() => this.props.openModal("Change topic")}>Edit</p>
                                            </div>
                                            <div className="topic-option">
                                                {/* TODO: need to update the descriptions for the channels (you can either use the channel update form or create a new one*/}
                                                <p>Description</p>
                                                <p className="topic">{Object.values(this.props.channel)[0].description.length === 0  ? "No description for this channel. Add a description!" :Object.values(this.props.channel)[0].description}</p>
                                                <p className="edit" onClick={() => this.props.openModal("Change description")}>Edit</p>
                                            </div>  
                                        </div>
                                    </div>
                                        
                                        :
                                        ""
                                    }

                                    <div onClick={() => this.handleClickMembers()} className="about-members">
                                        <p> Members </p>
                                        {this.state.members ? <p>▲</p> : <p>▼</p>}
                                    </div>
                                    {this.state.members ?
                                        <div className="members-options">
                                            {members}
                                        </div>
                                        :
                                        ""
                                    }


                                </div>
                                :
                                ""}
                    </div>
                </div>
            </div>
        )
    }

}

export default ChannelItem;

