import React from 'react';
import { Link} from 'react-router-dom';

class LogIn extends React.Component {
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
        if (item.length > 0){
            return (
            <p>{item}</p>
        )}
        return null
    }

    handleSubmit(e){
        e.preventDefault()
        // debugger
        this.props.action(this.state)
        
    }

    handleChange(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
    render(){
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
                        <p>{this.handleErrors()}</p>

                        <br/>
                    <label>
                            <input type="text" id='email' onChange={this.handleChange('email')} placeholder='name@work-email.com'/>
                    </label>
                        <br />
                    <label>
                        <input type="password" id='password' onChange={this.handleChange('password')} />
                    </label>
                        <br />
                    <input type="submit" value="Sign in with Email" id='splash-button' />
                    </form>
                </div>
            </div>
        )

    }
}



export default LogIn;