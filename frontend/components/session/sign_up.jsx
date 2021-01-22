import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    // Goal: sign up form
    constructor(props){
        // debugger
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // Goal: login form
    // componentDidMount(){
    //     this.props.login(this.props.currentUser)
    // }

    handleErrors() {
        const item = this.props.errors
        if (item.length > 0) {
            return (
                <p>{item}</p>
            )
        }
        return null
    }

    handleSubmit(e){
        e.preventDefault()
        debugger
        this.props.action(this.state)

    }

    handleChange(field){
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render(){
        return (
            <div>
                <Link to='/'><img src="https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png" alt="Slack Logo" height='30' /></Link>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.handleErrors()}
                    <label>Email
                <br />
                        <input type="text" id='email' onChange={this.handleChange('email')} />
                    </label>
                    <br />
                    <label>Username
                <br />
                        <input type="text" id='email' onChange={this.handleChange('username')} />
                    </label>
                    <br />
                    <label>Password
                <br />
                        <input type="text" id='password' onChange={this.handleChange('password')} />
                    </label>
                    <br />
                    <input type="submit" value="Sign up" />
                </form>
                <Link to='/login'>Log into your Account</Link>
            </div>
        )

    }
}

export default SignUp;