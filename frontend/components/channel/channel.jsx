import React from 'react';
import ChannelItem from './channeItem';
// ^^imported channel item which is one channel

//where we are going to be fetching all channels, updating then, removing etc..
// ChannelForm is being opened by modals on central 
class Channel extends React.Component{
    constructor(props){
        super(props)
         
    }

    // componentDidMount(){

        
    // }
    render(){
        return(
            <div>
                <ul>
                    {/* {channels} */}
                </ul>
            </div>
        )
    }
}

export default Channel