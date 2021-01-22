import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
    // Goal: login form
    render(){
        return (
            <div>
                <Link to='/'><img src="https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png" alt="Slack Logo" height='30' /></Link>
                <h1>Log into SlackMe</h1>
                <form>
                    <label>Email address
                <br />
                        <input type="text" id='email' />
                    </label>
                    <br />
                    <label>Password
                <br />
                        <input type="password" id='password' />
                    </label>
                    <br />
                    <button>Log In</button>
                </form>
                <Link to='/signup'>Create an Account</Link>
            </div>
        )

    }
}



export default LogIn;