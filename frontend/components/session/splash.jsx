import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {
    // Goal: sign up form

    return (
        <div>
            HomePage
            <br/>
            <Link to="/login">Sign In</Link>
            <br/>
            <Link to="/signup">Try for free</Link>
        </div>
    )
}



export default Splash;