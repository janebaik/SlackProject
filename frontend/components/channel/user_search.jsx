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
        // console.log(this.props.channel)
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    handleChange(field) {
         
        return event => {
            event.preventDefault();
            this.setState({ [field]:event.currentTarget.value })};
    }

    handleMatches(names){
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return matches;
        }
        names.forEach((name, index) => {
            const letters = name.slice(0,this.state.inputVal.length);
            if (this.state.nameItems.includes(name)){
                matches.push(<li className="list-none">Already added this user to the channel!</li>);
            }
            else if (letters.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(<button className="selectedname" onClick={() => this.handleInput(name)}>{name}</button>);
            }
        });

        if (matches.length === 0) {
            matches.push(<li className="list-none">No matches found - Try using their email instead</li>);
        }

        return matches;
    }
    handleInput(name){
        //make it able to delete the user from channel 
        this.state.nameItems.push(name);
        this.setState(this.state.nameItems);
        this.state.inputVal = ""
        // this.setState({ [this.state.inputVal]: ""});
         
        console.log(`${this.state.nameItems}"nameItems"`);
        console.log(`${this.state.inputVal}"input val"`);
         
        }

    handleSubmit(){
         
        this.props.closeModal();
    }
    render(){
        let names = this.props.users.map(a => a.username);
        const results = this.handleMatches(names);
        return(
            <div>
                <form className="user-search-form" >
                    <div className="user-search-header">
                        <div>
                            <label className="add-people" htmlFor="userMember">Add People</label>
                            <p className="name-channel">#nameofchannel</p>
                            {/* <p className="name-channel">#{this.props.channel[0].name}</p> */}
                        </div>
                        <button type="button" className="modal-button" onClick={() => this.props.closeModal()}>X</button>
                    </div>
                    <div className="members">
                        <div>
                            <input type="radio" id='addall' value="add all" name="members" checked={(results.length === 0 ? "checked" : "")}   />
                            <label className="label" htmlFor="addall" >Add all memebers of namechannel;</label>
                            {/* <label className="label" htmlFor="addlall">Add all members of {this.props.channel[0].name}</label> */}
                        </div>
                        <div className="member-items" >
                            <input type="radio" id="addspecific" value="add specific" name="members" checked={(results.length > 0 ? "checked" : "")}  /> 
                            <label className="label" htmlFor="addspecific" >Add specific people (try jane)</label>
                        </div>
                    </div>
                    <input className="input-box"  type="text" id='userMember' value={this.state.inputVal} onChange={this.handleChange("inputVal")} placeholder="Enter a name or email"/>
                    <p>{this.state.nameItems}</p>
                    <p>hello</p>
                    <ul>
                        <li className={(results.length > 0 ? 'list-names' : "" )} >{results}</li>
                    </ul>
                    <div className="button-search">
                        <button type="button" className="private-button" onClick={() => this.handleSubmit()}>Done</button>
                        {/* <button className="private-button">Skip for now</button> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSearchForm;
