import React from 'react';
class ChannelUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentChannel[0].id,
            name: this.props.currentChannel[0].name,
            topic: "",
            status_public: this.props.currentChannel[0].status_public
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannels();
    }

    handleChange(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit(event) {
        event.preventDefault();
         
        this.props.updateChannel(this.state).then(() => this.props.closeModal())
        
    }

    handleClose() {
        this.props.closeModal();
    }

    render() {
        // cannot change it back to true because line 57 never gets updated
        return (
            <div className='channel-form-topic'>
                <form  onSubmit={this.handleSubmit}>
                    <label className="edit-topic-header" htmlFor="Description">Edit channel Topic</label>
                    <div>
                        <textarea className="text-topic" type="text" onChange={this.handleChange("topic")} defaultValue={this.props.currentChannel[0].topic}/>
                    </div>
                    <div className="buttons-edit-topic">
                        <button onClick={() => this.handleClose()} className="button" button="button">Cancel</button>
                        <button button="submit" className="private-button">Set Topic</button>
                    </div>
                </form>

            </div>
        )

    }
}
export default ChannelUpdate;