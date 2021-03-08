import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props) {
        //  
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // Goal: login form
    // componentDidMount(){
    //     this.props.login(this.props.currentUser)
    // }

    componentDidMount() {
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
         
        this.props.action(this.state)

    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        const errors = this.handleErrors() 
        return (
            <div className='form-sign-in-master'>
                {/* section one */}
                <div>
                    <ul className='form-logo'>
                        <li>
                            <Link to='/' className='logo-text'>
                                <img src={window.logo} alt="logo" />
                            </Link>
                        </li>
                        <li className='other-button'>
                            <p>New to Slack?</p>
                            <Link to='/signup' className='other-form'>Create an Account</Link>
                        </li>
                    </ul>
                </div>
                {/* section two */}
                <div className='sign-header-form'>
                    <h1 className='header-sign-form'>Sign into SlackMe</h1>
                </div>
                {/* section three */}
                <div className='form-sign-in'>

                    <form onSubmit={this.handleSubmit} className='form-sign'>

                        <br />
                        <label>
                            <input className={errors ? "input-error" : ""}  type="text" id='email' onChange={this.handleChange('email')} placeholder='name@work-email.com' />
                        </label>
                        {errors}
                        <br />
                        <label>
                            <input className={errors ? "input-error" : ""}  type="password" id='password' onChange={this.handleChange('password')} />
                        </label>
                        {errors}
                        <br />
                        <input type="submit" value="Sign in manually" id='splash-button' />
                    </form>
                </div>
            </div>
        )

    }
}



export default LogIn;