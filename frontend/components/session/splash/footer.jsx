import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer>
            <div className='footer-one'>
                <div className='footer-one-items'>
                    <p>Choose a better way to work</p>
                    <Link to="/signin"><button id='footer-button' >TRY FOR FREE</button></Link>
                </div>
            </div>
            <div className='padding'>
                
            </div>
            <div className='footer-two'>
                <div className='footer-links'>
                    <div>
                        <img src={window.logoSymbol} alt="logo-nav" className='logo' />
                    </div>
                    <div className='footer-column'>
                        <h1>ABOUT ME</h1>
                        <ul>
                            <li><a href="https://www.britannica.com/place/Guam" target="_blank" >Guam</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Siamese_fighting_fish" target="_blank" >Favorite Pet</a></li>
                            <li><a href="https://www.crystalknows.com/enneagram/type-7-wing-8" target="_blank" >My Ennegram</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h1>Bucket List</h1>
                        <ul>
                            <li><a href="https://en.wikipedia.org/wiki/Cave_diving" target="_blank" >Cave Diving</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Aurora#:~:text=An%20aurora%20(plural%3A%20auroras%20or,around%20the%20Arctic%20and%20Antarctic)." target="_blank" >Aurora Lights</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Snowboarding" target="_blank" >Snow Boarding</a></li>
                            <li><a href="https://www.polarcruises.com/arctic/ships/icebreaker/50-years-victory-arctic/north-pole-ultimate-arctic-adventure#rates_63" target="_blank" >Cruise</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h1>FAVORITE HOBBY</h1>
                        <ul>
                            <li><a href="https://www.maangchi.com/recipe/jjajangmyeon" target="_blank" >Best Savory Recipe</a></li>
                            <li><a href="https://sallysbakingaddiction.com/vanilla-cake/" target="_blank" >Best Dessert Recipe</a></li>
                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h1>Best Coffee</h1>
                        <ul>
                            <li><a href="https://club.atlascoffeeclub.com/best-coffee-for-cold-brew/" target="_blank" >Cold Brew</a></li>
                            <li><a href="https://www.goodhousekeeping.com/food-recipes/cooking/a32896369/how-to-make-a-latte/" target="_blank" >Latte</a></li>
                            <li><a href="https://www.homegrounds.co/how-to-make-an-americano/" target="_blank" >Americano</a></li>
                            <li><a href="https://www.thespruceeats.com/how-to-make-coffee-4162028" target="_blank" >Tips for Coffee</a></li>

                        </ul>
                    </div>
                    <div className='footer-column'>
                        <h1>LANGUAGES</h1>
                        <ul>    
                            <li><a href="https://www.ruby-lang.org/en/" target="_blank" >Ruby</a></li>
                            <li><a href="https://www.javascript.com/" target="_blank" >JavaScript</a></li>
                            <li><a href="https://www.w3.org/standards/webdesign/htmlcss.html#:~:text=HTML%20(the%20Hypertext%20Markup%20Language,for%20a%20variety%20of%20devices." target="_blank" >HTML/CSS</a></li>
                            <li><a href="https://www.oracle.com/java/technologies/" target="_blank" >Java</a></li>
                            <li><a href="https://www.python.org/" target="_blank" >Python</a></li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className='last-footer'>
                    <ul className='last-footer-links'>
                        <li>
                            <h1>Contact Me</h1>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jane-baik-963b59195/" target="_blank"><img src={window.linked} alt="linkedin-logo" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/janebaik" target="_blank"><img src={window.github} alt="github-logo" /></a>

                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer;