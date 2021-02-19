import React from 'react';

class UserSearchForm extends React.Component{
    constructor(props){
        super(props)
         
        this.state = {
            inputVal: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            matches.push('No matches found');
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
                    <label htmlFor="userMember">Add People</label>
                    <p>X</p>
                    <p># this.props.channelname</p>


                    <input type="radio" id='addall' value="add all"/>
                    <label htmlFor="addall">Add all memebers of ____</label>
                    {/* <label htmlFor="addlall">Add all members of {this.props.channel}</label> */}
                    <input type="radio" name="" id="addspecific" value="add specific"/>
                    <label htmlFor="addspecific">Add specific people</label>


                    <input type="text" id='userMember' value={this.state.inputVal} onChange={this.handleChange("inputVal")} />
                    
                    <ul>
                        <li onClick={() => this.handleInsertion()}>{results}</li>
                    </ul>


                    <button value="submit">Done</button>
                    <button>Skip for now</button>
                </form>
            </div>
        )
    }
}

export default UserSearchForm;
