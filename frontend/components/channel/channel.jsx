import React from 'react';
import { Link } from 'react-router-dom';
import ChannelItem from './channelItem_container';
// ^^imported channel item which is one channel

//where we are going to be fetching all channels, updating then, removing etc..
// ChannelForm is being opened by modals on central 
class Channel extends React.Component{
    constructor(props){
        super(props)
         this.state = {
             channel : {},
             component: ""
         }
    }

    componentDidMount(){
        this.props.fetchChannels();
        debugger
    }
    
    handleChannel(id, name, topic){
        this.props.fetchChannel(id)
        this.setState({ ["component"]: <ChannelItem channelId={id} name={name} topic={topic}/>})
        // changing the background color to purple
        this.props.channels.map((channel) => {
            document.getElementById(channel.id).style.backgroundColor = "rgb(84, 19, 85)"
        })
        // changing selected color to blue
        document.getElementById(id).style.backgroundColor = "rgb(61, 132, 226)"
    }
    render(){
        const channels = this.props.channels.map((channel) => {
            return <span id={channel.id} key={channel.id} className= "channel-items" onClick={() => this.handleChannel(channel.id, channel.name, channel.topic)}>{channel.status_public ? "#" : <li className="fa">&#xf023;</li>}<li className="hashtag" ></li>{channel.name}</span>
        })
        // const channels =  this.props.channels.map((channel) => {
        //     debugger
        //     // this.props.fetchChannelMembers(channel.id)
        // })
        
        return(
            <div className="channel-master-layout">
                <ul>
                    {channels}
                </ul>
                <div>
                    {this.state.component}
                </div>
            </div>
        )
    }
}

export default Channel