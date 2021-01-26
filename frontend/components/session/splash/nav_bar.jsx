import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const NavBar = () => {

    // $(document).ready(function () {
    //     $(window).scroll(function () {   //scrolls the window to a particular place (takes in x,y coordinate)
    //         var scroll = $(window).scrollTop();
    //         if (scroll > 500) {
    //             $(".nav-bar").css({ "background-color": "white",
    //                                 "box-shadow":"10px 5px 35px rgba(0, 0, 0, 0.075)"});
    //         }
    //         else {
    //             $(".nav-bar").css({ "background-color": "rgb(255, 246, 239)",
    //                                 "box-shadow": "none"});
    //         }
    //     })
    // })

    
    return(
        <div>
            <nav className='nav-bar'>
                {/* will be on the left */}
                
                <div className='nav-bar-left'>
                    <ul>
                        <li>
                            <Link to='/'>
                                <img src={window.logo} alt="logo-nav" className='logo' />
                            </Link>
                        </li>
                        {/* dropdown */}
                        {/* <div className='nav-header-left-item'> */}
                            {/* <li className='drop-nav'><a>Product</a>
                                <ul className='drop-item'>
                                    <li>
                                        <Link to='/features'>Features</Link>
                                    </li>
                                    <li>
                                        <Link to='/channels'>Channel</Link>
                                    </li>
                                    <li>
                                        <Link to='/customers'>Customers</Link>
                                    </li>
                                    <hr className='hr'/>
                                    <li>
                                        <Link to='/goals'>Goal</Link>
                                    </li>
                                </ul>
                            </li> */}
                            {/* end of dropdown */}

                            <li>
                                <a href="https://www.linkedin.com/in/jane-baik-963b59195/" target="_blank">My LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://github.com/janebaik" target="_blank">My Github</a>
                            </li>
                        {/* </div> */}
                    </ul>
                </div>


                {/* will be on the right */}
                <div className='nav-bar-right'>
                    <ul>
                        <li>
                            <Link to="/signin">Sign in</Link>
                        </li>
                        <li>
                            <button id='splash-button'>
                                <Link to="/signup" style={{ color:" white" }}>TRY FOR FREE</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar