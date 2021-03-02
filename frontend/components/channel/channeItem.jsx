import React from 'react';
import { updateChannel } from '../../util/channel_api_util';


class ChannelItem extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        debugger
        this.props.fetchChannel(this.props.channelId)
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
        this.props.fetchChannel(this.props.channelId)
        this.props.openModal('Change topic')
        //TODO
    }
    render() {

        return (
            <div>
                <div className="channel-header">
                    <div className="channel-item-header">
                        <p>#{this.props.name}</p>
                        <a className="topic" onClick={() => this.updateChannelInfo(this.props.channelId)}>{this.props.topic.length > 0 ? this.props.topic : "Add a topic"}</a>
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
                        <div className="tooltip-last">
                            <img className="icon-channel" src={window.infoicon} alt="info-icon" />
                            <div className="tooltiptext-last">Channel Info</div>
                        </div>
                    </div>
                </div>
                {/* description
                <div className="detail">
                    <div className="detail-header">
                        <div>
                            <p>Details</p>
                            <p>#{this.props.name}</p>
                        </div>
                        <div>X</div>
                    </div>
                    <hr />
                    <div className="icons">
                        <div className="tooltip">
                            <img onClick={() => this.handleAddUser()} className="icon-channel" src={window.addMemberIcon} alt="member-add-icon" />
                            <p>Add</p>
                            <div className="tooltiptext">Add people to the #{this.props.name}</div>
                        </div>
                        <div className="tooltip">
                            <img className="icon-channel" src={window.infoicon} alt="info-icon" />
                            <p>More</p>
                            <div className="tooltiptext">More options</div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

}

export default ChannelItem;