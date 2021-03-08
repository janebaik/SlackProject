import React from 'react';

class UserSearchForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal: '',
            nameItems: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
         
        // console.log(this.props.channelMembers)
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchChannelMembers()
        this.props.fetchChannelMembers(this.props.channelItem[0].id);
        this.props.fetchChannels();
    }


    handleChange(field) {
        return event => {
            event.preventDefault();
            this.setState({ [field]:event.currentTarget.value })};
    }

    handleMatches(names, namesIds){
         
        const matches = [];
        const previouslyAdded = [];
        if (this.state.inputVal.length === 0) {
            return matches;
        }
        // console.log(namesIds) //TODO You can use namesIds to compare the this.channelMembers get the name and compare it to the nameItems or matches which ever
         
        namesIds.map((userArray) => {
            let id = userArray[1]
            let name = userArray[0]
            this.props.channelMembers.map((userPrevious) => {
                if (id === userPrevious.user_id){
                    previouslyAdded.push(name)
                }
            })
        })
        let count = 0;
        const letter = this.state.inputVal;
         
        while (previouslyAdded.length > count) {
            const letters = previouslyAdded[count].slice(0, this.state.inputVal.length);
            if (letters.toLowerCase() === letter.toLowerCase()) {
                //todo: need to return a different message for users already added 
                 
                matches.push(<button className="selectedname">You already added this user!</button>);

            }
            count += 1;
        }
         
        if (matches.length === 0){
            names.forEach((name) => {
                const letters = name.slice(0, this.state.inputVal.length);
                 
                if (letters.toLowerCase() === this.state.inputVal.toLowerCase()) {
                     
                    matches.push(<button className="selectedname" onClick={() => this.handleInput(name)}>{name}</button>);
                }
            });
             
            if (matches.length === 0) {
                matches.push(<li className="list-none">No matches found - Try using their email instead</li>);
            }
        }
        return matches;
    }
    handleInput(name) {
        //make it able to delete the user from channel 
        this.state.nameItems.push(name);
        this.setState(this.state.nameItems);
        this.state.inputVal = ""
    }
    handleErase(name){
        const index = this.state.nameItems.indexOf(name);
        this.setState({[this.state.name] : this.state.nameItems.splice(index, 1)})
    }

    handleSubmit(boolean){
        if (boolean){
             
            const userId = []
            this.props.channelMembers.map((user) => {
                userId.push(user.user_id)
            })
            // console.log(userId)
            this.props.users.map(name => {
                if (!userId.includes(name.id) && this.props.currentUser !== name.id){
                    this.props.addUserChannel({ user_id: name.id, channel_id: this.props.channelItem[0].id })
                }
            })
             
        } else {
             
                // this.props.addUserChannel({ user_id: this.props.currentUser, channel_id: this.props.channelItem[0].id })
            let count = 0;
            while (this.state.nameItems.length > count) {
                let inputname = this.state.nameItems[count]

                this.props.users.map((name) => {
                    if (name.username === inputname) {
                        this.props.addUserChannel({ user_id: name.id, channel_id: this.props.channelItem[0].id })
                    }
                })
                count += 1;
            }
        }
        this.props.closeModal();
    }
    render(){
        let namesIds = []
        this.props.users.map(a => {
            namesIds.push([a.username, a.id])
        });
        let names = this.props.users.map(a => a.username);
        const results = this.handleMatches(names, namesIds);
        let nameItems;
        if (this.state.nameItems.length > 0) {
            nameItems = this.state.nameItems.map((name, i) => {
                return <button className="input-name" type="button" >{name}<p className="input-name-earse" type="button" onClick={() => this.handleErase(name)}>X</p></button>
            })
        }
        
        return(
            <div>
                <form className="user-search-form" >
                    <div className="user-search-header">
                        <div>
                            <label className="add-people" htmlFor="userMember">Add People</label>
                            {/* <p className="name-channel">#nameofchannel</p> */}
                            <p className="name-channel">#{this.props.channelItem[0].name}</p>
                        </div>
                        <button type="button" className="modal-button" onClick={() => this.props.closeModal()}>X</button>
                    </div>
                    <button className="add-all-button" onClick={() => this.handleSubmit(true)}>Add all members of {this.props.channelItem[0].name}</button>

                    {/* <div className="members">
                        <div>
                            <input type="checkbox" id='addall' value="add all" name="members"/>
                            <label className="label" htmlFor="addall" >Add all memebers of namechannel;</label>
                            <label className="label" htmlFor="addlall">Add all members of {this.props.channelItem[0].name}</label>
                        </div>
                        <div className="member-items" >
                            <input type="radio" id="addspecific" value="add specific" name="members" checked={this.state.inputVal.length !== 0 ? "checked" : ""} /> 
                        </div>
                    </div> */}
                    <p htmlFor="addspecific">You can add specific people down below! (try jane)</p>
                    <input className="input-box"  type="text" id='userMember' value={this.state.inputVal} onChange={this.handleChange("inputVal")} placeholder="Enter a name or email"/>
                    <div className="input-master">{nameItems}</div>
                    <ul>
                        <p className={(results.length > 0 ? 'list-names' : "" )} >{results}</p>
                    </ul>
                    <div className="button-search">
                        <button type="button" className={this.state.nameItems.length === 0 && this.state.inputVal.length === 0 ? "submitButton" : "private-button"} onClick={() => this.handleSubmit(false)}>Done</button>
                        {/* <button className="private-button">Skip for now</button> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSearchForm;

