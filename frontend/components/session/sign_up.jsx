import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    // Goal: sign up form
    constructor(props) {
        // debugger
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignInDemo = this.handleSignInDemo.bind(this)
    }
    // Goal: login form
    // componentDidMount(){
    //     this.props.login(this.props.currentUser)
    // }

    componentDidMount(){
        this.props.removeErrors()
    }
    handleErrors() {
        const item = this.props.errors
        if (item.length > 0) {
            if (item[0] === 'Password digest Password cannot be empty') {
                item[0] = 'Password cannot be empty'
            }
            return (
                <p className="signin-errors">{item[0]}</p>
            )
        }
        return null
    }

    handleSubmit(e) {
        e.preventDefault()
        this.state
        this.props.action(this.state)

    }

    handleSignInDemo(e){
        // sign in the demo user in the seed
        e.preventDefault();
        this.props.login({ username: 'demo_user', email: 'demo_user@gmail.com', password: 'ilovestars123' })
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        const errors = this.handleErrors() 
        return (
            <div className='form-sign-in-master'>

                <div>
                    <ul className='form-logo'>
                        <li>
                            <Link to='/' className='logo-text'>
                                <img src={window.logo} alt="logo" />
                            </Link>
                        </li>
                        <li className='other-button'>
                            <p>Have an Account?</p>
                            <Link to='/signin' className='other-form'>Log into your Account</Link>
                        </li>
                    </ul>
                </div>

                <div className='sign-header-form'>
                    <h1 className='header-sign-form'>Create a SlackMe Account</h1>
                </div>
                <div className='demo-button'>
                    <button onClick={this.handleSignInDemo}>
                        Try A Demo!
                    </button>
                </div>
                <div className='form-sign-in'>
                    <form onSubmit={this.handleSubmit} className='form-sign'>
                        <br />
                        <label>
                            <input className={errors ? "input-error" : ""} type="text" id='email' onChange={this.handleChange('email')} placeholder='name@work-email.com' />
                        </label>
                        {errors}
                        <br />
                        <label>
                            <input className={errors ? "input-error" : ""} type="text" id='username' onChange={this.handleChange('username')} placeholder='Username' />
                        </label>
                        {errors}
                        <br />
                        <label>
                            <input className={errors ? "input-error" : ""} type="password" id='password' onChange={this.handleChange('password')} />
                        </label>
                        {errors}
                        <br />
                        <input type="submit" value="Sign up" id='splash-button' />
                    </form>
                </div>
            </div>
        )

    }
}

export default SignUp;