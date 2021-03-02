import React from 'react';

class FetchUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            nameItems: "",
        };
        this.handleChange = this.handleChange.bind(this);
        // console.log(this.props.channel)
    }

    componentDidMount() {
        // fetch users using this.props.fetchChannelMembers(this.props.channelItem[0].id)
        this.props.fetchUsers()
        this.props.fetchChannelMembers(this.props.channelItem[0].id)
    }

    handleSearch(){
        this.props.openModal("Add users")
    }

    handleChange(field) {
        return event => {
            event.preventDefault();
            this.setState({ [field]: event.currentTarget.value })
        };
    }
    handleInput(name, userId){
        console.log(name)
        this.setState({ ["nameItems"]: <button type="button" className="nameItems" key={userId}>
            {/* TODO */}
                                            <img className="img-button-modal" src={window.MemberIcon} alt=""/>
                                            <p className="name-button-modal">{name}</p>
                                        </button> })
    }
    handleClearSearch(){
        this.setState({["inputVal"] : ""})
    }
    clearNameItems(){
        this.setState({ ["nameItems"]: "" })
    }
    handleMatches() {
        debugger
        let names = [];
        const matches = [];
        const matched = [];
        this.props.channelMembers.map((user) => {
            debugger
            this.props.users.map((userName) => {
                if (userName.id === user.user_id){
                    names.push(userName.username);
                    matches.push(<p onClick={() => this.handleInput(userName.username, user.id)} className="item-name">{userName.username}</p>)
                }
            })
        })
        
        if (this.state.inputVal.length === 0) {
            return matches;
        }
        console.log(matched)
        debugger
        names.map((name) => {
            const letters = name.slice(0, this.state.inputVal.length);
            if (letters.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matched.push(<p onClick={() => this.handleInput(name)} className="item-name">{name}</p>);
            }
        });
        if (matched.length === 0) {
            matched.push(<p className="error-search">No matches found</p>);
            matched.push(<div className="center-clearout"><button className="clearout" type="button" onClick={() => this.handleClearSearch()}>Clear Search</button></div>)
        }
        return matched
    }
    

    render() {
        // let names = this.props.users.map(a => a.username);
        const results = this.handleMatches();
        return (
            <div>
                <form className="user-search-form" >
                    <div className="user-search-header">
                        <div>
                            <label className="add-people" htmlFor="userMember">{this.props.channelMembers.length} Members in #{this.props.channelItem[0].name}</label>
                        </div>
                        <button type="button" className="modal-button" onClick={() => this.props.closeModal()}>X</button>
                    </div>
                    <div className="search" onClick={() => this.handleSearch()}>
                        Add People
                    </div>  
                    <input className="input-box" type="text" id='userMember' value={this.state.inputVal} onChange={this.handleChange("inputVal")} onClick={() => (this.clearNameItems())} placeholder="Search Members" />
                    <div className="item">{results}</div>
                    <div>{this.state.nameItems}</div>
                </form>
            </div>
        )
    }
}

export default FetchUser;

