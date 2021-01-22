import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {
    // Goal: sign up form

    return (
        <div>
            HomePage
            <br/>
            <button>
                <Link to="/login">Sign In</Link>
            </button>
            <br/>
            <button>
                <Link to="/signup">Try for free</Link>
            </button>
        </div>
    )
}



export default Splash;