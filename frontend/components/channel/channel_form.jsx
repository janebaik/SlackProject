import React from 'react'
import { Link } from 'react-router-dom';

class ChannelForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            description: "",
            status_public: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleUsername(event){
        this.setState({username: event.currentTarget.vale})
    }


    handleSubmit(event){
        event.preventDefault();
        // debugger
        this.props.createChannel(this.state).then(this.props.closeModal)
        // check if author id is implemented in the background
    }

    handleToggle(event){
        // debugger
        this.setState({status_public: !this.state.status_public});
        // debugger
    }

    render(){
        // debugger
        // cannot change it back to true because line 57 never gets updated
        return (
            <div className='channel-form-master'>
                <form className='channel-form-placement' onSubmit={this.handleSubmit}>
                    <div className="channel-1">
                        <h1>Create a channel</h1>
                        <button onClick={this.props.closeModal}>X</button>
                    </div>
                    <div className='content-channel'>
                        <p>Channels are where you can talk with teammates. They are the best way to talk! Best to orgainze around a topic</p>
                    </div>
                    <div>
                        <div className="channel-name-label">
                            <div className="channel-name-input">
                                <label for="Name" >Name</label>
                                <p>error Message</p>
                            </div>
                            <div>
                                <input id="Name" type="text" value={this.state.name} onChange={this.handleChange("name")} />
                                {/* <img src="" alt=""/> */}
                            </div>
                        </div>
                    </div>
                    <div className="channel-name-label">
                        <div className="channel-name-input2">
                            <label for="Description">Description</label>
                            <p>(optional)</p>
                        </div>
                        <div className="channel-name-input2-5">
                            <input id="Description" type="text" value={this.state.description} onChange={this.handleChange("description")} />
                            <p>What's this channel about?</p>
                        </div>
                    </div>
                    <div className="channel-private">
                        <div className="channel-private-label">
                            <label> Make it Private</label>
                        </div>
                        <div className="channel-private-toggle">
                            <p> When a channel is set to private, it can only be viewed or join by invitation</p>
                            <div className="toggle">
                                <input id="private-true" className="togglebutton" type="checkbox" value={status} onClick={() => this.handleToggle(status)} />
                                <label for="private-true" className="toggle-button-label" ></label>
                            </div>
                        </div>
                    </div>
                    <div className="last-channel-section">
                        <div >
                            <img className='iconimage' src={window.infoicon} alt="Icon img">
                            </img>
                            <a className="last-inner-channel-section" href="https://www.linkedin.com/in/jane-baik-963b59195/" target="_blank">My LinkedIn</a>
                        </div>
                        <button value='submit'>Create</button>
                    </div>
                </form>

            </div>
        )

    }
}

export default ChannelForm;