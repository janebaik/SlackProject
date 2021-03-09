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
    }
    addUsers(){
        this.props.addUserChannel({ user_id: this.props.currentUserId, channel_id: 1 })
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.channel.length !== 0){
            if (prevProps.channel[0].topic !== this.props.channel[0].topic) {
                this.handleChannel(this.props.channel[0].id, this.props.channel[0].name, this.props.channel[0].topic)
            }
            if (prevProps.channelMembers !== this.props.channelMembers){
                let init = false;
                Object.values(this.props.channelMembers).map((objectData) => {
                    if (objectData.user_id === this.props.currentUserId) {
                        debugger
                        init = true
                        console.log("UERUEUREURUE more")
                    }
                })
                debugger
                if (!init) {
                    debugger
                    // this.handleChannel(this.props.channels[0].id, this.props.channels[0].name, this.props.channels[0].topic)     
                    debugger
                    document.getElementById(`${prevProps.channel[0].id}`).remove();
                }
                debugger

            }
        }
    }
    
    handleChannel(id, name, topic){
        this.props.fetchChannel(id);
        const channelMembers = this.props.fetchChannelMembers(id);
        debugger
        // option 1
        // const arrayMember = Object.values(this.props.channelMembers)
        // debugger
        // arrayMember.map((channel, i) => {
        //     debugger
        //     if (this.props.currentUserId === channel.user_id) {
        //         document.getElementById(channel.id).style.backgroundColor = "rgb(84, 19, 85)"
        //     }
        // })
        // option 2
        // this.props.channels.map((channel, i) => {
        //     Object.values(channel.channel_member).map((user) => {
        //         if (this.props.currentUserId === user.user_id) {
        //             document.getElementById(channel.id).style.backgroundColor = "rgb(84, 19, 85)"
        //         }
        //     })
        // })
        this.setState({ ["component"]: <ChannelItem channelId={id} name={name} topic={topic} channelMembers={channelMembers}/>})
        // document.getElementById(id).style.backgroundColor = "rgb(61, 132, 226)"
    }
    render(){
         
        const channels = this.props.channels.map((channel, i) => {
            let checkedGeneral = true;
            // return <span id={channel.id} key={channel.id} className="channel-items" onClick={() => this.handleChannel(channel.id, channel.name, channel.topic)}>{channel.status_public ? "#" : <li className="fa">&#xf023;</li>}<li className="hashtag" ></li>{channel.name}</span>
            const arraychannel = []
            Object.values(channel.channel_member).map((user) => {
                if (this.props.currentUserId === user.user_id) {
                    const channelid = channel.id.toString();
                    arraychannel.push(<span id={channel.id} key={channel.id} className="channel-items" onClick={() => this.handleChannel(channel.id, channel.name, channel.topic)}>{channel.status_public ? "#" : <li className="fa">&#xf023;</li>}<li className="hashtag" ></li>{channel.name}</span>)
                }
            })
            if (checkedGeneral){
                if (channel.name === "General") {
                    let insideGeneral = false;
                    channel.channel_member.map((channelObject) => {
                        if (channelObject.user_id === this.props.currentUserId){
                            insideGeneral = true;
                        }
                    })
                    if (!insideGeneral && channel.name === "General"){
                        this.props.addUserChannel({ user_id: this.props.currentUserId, channel_id: 1 }).then(() =>this.props.fetchChannels())
                        insideGeneral = true;
                        // this.props.fetchChannel(1);
                    }
                    // let count = 0;
                    // let insideGeneral = false;
                    //  
                    // Object.values(channel.channel_member).map((object) => {
                    //      
                    //     if (object.user_id === this.props.currentUserId) {
                    //          
                    //         insideGeneral = true;
                    //     }
                    // })
                    //  
                    // if (!insideGeneral && count < 1) {
                    //      
                    //     count += 1
                    //     this.props.addUserChannel({ user_id: this.props.currentUserId, channel_id: 1 })
                    //     arraychannel.push(<span id={channel.id} key={channel.id} className="channel-items" onClick={() => this.handleChannel(channel.id, channel.name, channel.topic)}>{channel.status_public ? "#" : <li className="fa">&#xf023;</li>}<li className="hashtag" ></li>{channel.name}</span>)
                    // }
                }
                checkedGeneral = false
            }
            
            return arraychannel
        })
        
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