import React from 'react';
import NavBar from './nav_bar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Splash = (props) => {
    // Goal: sign up form

    return (
        <div>
        <div className='header-splash-div'>
            <NavBar/>
            {/* section one */}
            <div className='header-splash'>
                <div className='bio-splash'>
                    <header>Welcome to you new HQ</header>
                    <p>Here is place where we can communicate and come together. Let's get things done!</p>
                    <Link to="/signup">
                    <button id='splash-button-main'>
                            TRY FOR FREE
                    </button>
                    </Link>
                </div>
                <div className='bio-image-tag'>
                    <img src={window.logoSymbol} alt="logo"/>
                </div >
                <div className='second-bio-splash'>
                <div>
                    <img src={window.slackgif} alt="" />
                </div>
                <div className='bio-splash-2'>
                    <h1>
                        A way to communicate
                    </h1>
                    <p>East to follow, Easy to connect</p>
                            <Link to='/features'>
                    <button>
                        Features
                    </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>

            {/* section two */}
            <div className='splash-content-master'>
                {/* one */}
                <div className='splash-content'>
                    <div>
                        <p>Over 750,000 companies use Slack to get work done</p>
                    </div>
                </div>
                {/* two */}
                <div className='splash-content3'>
                    <div className='splash-content2'>
                        <div>
                            <p>
                                “We have so many moving parts that are so interconnected. We have the farm that speaks to the kitchen. We have floral that speaks to the kitchen. We have the kitchen that speaks to everything.”
                            </p>
                        </div>
                        <div>
                            <h3>
                                Katina Connaughton
                            </h3>
                            <h3>
                                Head Farmer, SingleThread
                            </h3>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.rover.com/blog/wp-content/uploads/2019/05/puppy-in-bowl.jpg" alt="" />
                    </div>
                </div>
                {/* three */}
                <div className='splash-content4'>
                    
                        <a href="https://www.linkedin.com/in/jane-baik-963b59195/" target="_blank"><img src={window.linked} alt="linkedin-logo" /></a>
                    
                    
                        <a href="https://github.com/janebaik" target="_blank"><img src={window.github} alt="github-logo" /></a>

                    
                </div>
            </div>

            <Footer/>
        </div>
        
    )
}



export default Splash;