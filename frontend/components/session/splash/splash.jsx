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
                    <header>Welcome to your new SlackMe</header>
                        <p>Teamwork can be hard, messy, complicated… and still the best way to work. That’s why we made Slack — a place where people get work done, together.</p>
                    <Link to="/signup">
                        <button id='splash-button-main'>
                                TRY FOR FREE
                        </button>
                    </Link>
                </div>
                <div className='bio-image-tag'>
                    <img src={window.logoSymbol} alt="logo"/>
                </div >
            </div>
            <div className='second-bio-splash'>
                <div>
                        <img src={window.slackgif} alt="gif-slack" className='bio-splash-3'/>
                </div>
                <div className='bio-splash-2'>
                    <h1>
                            A better way to communicate
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
        

            {/* section two */}
            <div className='splash-content-master'>
                {/* one */}
                <div className='splash-content'>
                    <div >
                        <p className='splash-content-header'>This SlackMe is made by Jane Baik and inspired by the Slack product </p>
                    </div>
                </div>
                {/* two */}
                <div className='splash-content3'>
                    <div className='splash-content2'>
                        <div>
                            <p>
                                Coming from the Island of Guam, I learned many new ways to communicate
                                to my friends back home. Slack is one of the main ways I communicate in work 
                                and with friends!
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={window.frontendpics} alt="" />
                    </div>
                </div>
                {/* three */}
                {/* <div className='splash-content4'>
                    <a href="https://www.linkedin.com/in/jane-baik-963b59195/" target="_blank"><img src={window.linked} alt="linkedin-logo" /></a>
                    <a href="https://github.com/janebaik" target="_blank"><img src={window.github} alt="github-logo" /></a>
                </div> */}
            </div>

            <Footer/>
        </div>
        
    )
}



export default Splash;