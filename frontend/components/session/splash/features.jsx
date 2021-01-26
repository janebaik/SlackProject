import React from 'react';
import NavBar from './nav_bar';
import Footer from './footer';
import { Link, Redirect } from 'react-router-dom';

const Features = () => {
    // Goal: sign up form

    return (
        <div>
           <NavBar/>
           <div className='default-features'>
               <div className='features-heading'>
                   <h1>SLACKME FEATURES</h1>
                   <h2>One Place for you and your work</h2>
                   <h3>Everything in SlackMe works together, too</h3>
                    {/* anchor tag */}
               </div>
           </div>
           <Footer/>
        </div>
    )
}



export default Features;