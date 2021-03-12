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
         
        if (prevProps.channel.length !== 0){
            if (prevProps.channel[0].topic !== this.props.channel[0].topic) {
                this.handleChannel(this.props.channel[0].id, this.props.channel[0].name, this.props.channel[0].topic)
            }
            if (prevProps.channelMembers !== this.props.channelMembers){
                let init = false;
                Object.values(this.props.channelMembers).map((objectData) => {
                    if (objectData.user_id === this.props.currentUserId) {
                         
                        init = true
                    }
                })
                 
                if (!init) {
                    // this.handleChannel(this.props.channels[0].id, this.props.channels[0].name, this.props.channels[0].topic)     
                    document.getElementById(`${prevProps.channel[0].id}`).remove();
                }
                 

            }
        }
    }
    
    handleChannel(id, name, topic, description){
        this.props.fetchChannel(id);
        const channelMembers = this.props.fetchChannelMembers(id);
        // option 1
        // const arrayMember = Object.values(this.props.channelMembers)
        //  
        // arrayMember.map((channel, i) => {
        //      
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
        this.setState({ ["component"]: <ChannelItem channelId={id} name={name} topic={topic} description={description} channelMembers={channelMembers}/>})
        // document.getElementById(id).style.backgroundColor = "rgb(61, 132, 226)"
    }
    render(){
         
        const channels = this.props.channels.map((channel, i) => {
            // return <span id={channel.id} key={channel.id} className="channel-items" onClick={() => this.handleChannel(channel.id, channel.name, channel.topic)}>{channel.status_public ? "#" : <li className="fa">&#xf023;</li>}<li className="hashtag" ></li>{channel.name}</span>
            const arraychannel = []
            Object.values(channel.channel_member).map((user) => {
                if (this.props.currentUserId === user.user_id) {
                    // const channelid = channel.id.toString();
                    arraychannel.push(<span id={channel.id} key={channel.id} className="channel-items" onClick={() => this.handleChannel(channel.id, channel.name, channel.topic, channel.description)}>{channel.status_public ? "#" : <li className="fa">&#xf023;</li>}<li className="hashtag" ></li>{channel.name}</span>)
                }
            })
            let inGeneral = true;
            this.props.channels.map(channel => {
                console.log(channel)
                if (channel.name === "General"){
                    console.log(channel.channel_member)
                    if (channel.channel_member.includes(this.props.currentUserId)){
                        inGeneral = false
                    }
                }
            })
            if (inGeneral){
                // this.props.addUserChannel({ user_id: this.props.currentUserId, channel_id: 1 }).then(() => this.props.fetchChannels())
            }
            // if (checkedGeneral){
                
            //     if (channel.name === "General") {
            //         let insideGeneral = false;
            //         channel.channel_member.map((channelObject) => {
            //             if (channelObject.user_id === this.props.currentUserId){
            //                 insideGeneral = true;
            //             }
            //         })
            //         if (!insideGeneral && channel.name === "General"){
            //             this.props.addUserChannel({ user_id: this.props.currentUserId, channel_id: 1 }).then(() =>this.props.fetchChannels())
            //             insideGeneral = true;
            //             // this.props.fetchChannel(1);
            //         }
            //     }
            // }
            
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