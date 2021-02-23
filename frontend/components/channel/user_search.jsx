import React from 'react';

class UserSearchForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.props.channel)
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    handleChange(field) {
        return event => this.setState({ [field]:event.currentTarget.value });
    }

    handleMatches(names){
         
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return matches;
        }
        names.forEach(name => {
            const letters = name.slice(0,this.state.inputVal.length);
            if (letters.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches found - Try using their email instead');
        }

        return matches;
    }

    handleInsertion(){
        // want to be able to add the user in the text box
        // return a collection of userId's to add members to the channels
    }

    handleSubmit(){
        // actually adding the user to the channel
    }
    render(){
        let names = this.props.users.map(a => a.username);
        const results = this.handleMatches(names)
        
        return(
            <div>
                <form className="user-search-form" >
                    <div className="user-search-header">
                        <div>
                            <label className="add-people" htmlFor="userMember">Add People</label>
                            <p className="name-channel">#nameofchannel</p>
                            {/* <p className="name-channel">#{this.props.channel[0].name}</p> */}
                        </div>
                        <button className="modal-button" onClick={this.props.closeModal}>X</button>
                    </div>
                    <div className="members">
                        <div>
                            <input type="radio" id='addall' value="add all" />
                            <label className="label" htmlFor="addall">Add all memebers of namecjamme;</label>
                            {/* <label className="label" htmlFor="addlall">Add all members of {this.props.channel[0].name}</label> */}
                        </div>
                        <div className="member-items" >
                            <input type="radio" name="" id="addspecific" value="add specific" />
                            <label className="label" htmlFor="addspecific">Add specific people</label>
                        </div>
                    </div>
                    <input className="input-box"  type="text" id='userMember' value={this.state.inputVal} onChange={this.handleChange("inputVal")} placeholder="Enter a name or email"/>
                    
                    <ul>
                        <li onClick={() => this.handleInsertion()} className={(results.length > 0 ? 'list-names' : "" )} >{results}</li>
                    </ul>
                    <div className="button-search">
                        <button className="private-button" value="submit">Done</button>
                        {/* <button className="private-button">Skip for now</button> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSearchForm;
