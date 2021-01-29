// autocomplete
import React from 'react';

// It should contain an input field and an unordered list.
// Create an <li> inside the <ul> for every name that begins with the value in the input box.
// You'll need to pass a unique key property to each <li> or 
// React will grumble to all your console-reading users about its unfair working conditions.


class UserSearch extends React.Component{
    constructor(props){
        super(props)
        debugger
        this.state = {
            inputVal: ''
        };
    }

    handleChange(event){
        this.setState({inputVal: event.currentTarget.value})
    }
    // handleMatches

    render(){
        // const results = the results of all the inputted value that MATCHES the 
        // input with <li key={i}>result</li>
        return(
            <div>
                <label htmlFor="userMember"></label>Add People
                <input type="text" id='userMember' value={this.props.inputVal} onChange={this.handleChange}/>
                <ul>
                    {results}
                </ul>
                {/* Ternanary */}
                <button>Done</button>
                <button>Skip for now</button>
            </div>
        )
    }
}

export default UserSearch;
