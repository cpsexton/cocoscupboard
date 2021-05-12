import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our newsletter to follow all the fun
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at anytime
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name='email' placeholder="Example@example.com" className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscibe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='../pages/AboutUs.js'>Who we are</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='../pages/Contact.js'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Donators</Link>
                        <Link to='/'>Sponsor</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Services</h2>
                        <Link to='../pages/Services.js'>Services</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Donate</h2>
                        <Link to='../pages/Donate.js'>Donate</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Donators</Link>
                        <Link to='/'>Sponsor</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CCC Inc <i className='fas fa-paw' />
                        </Link>
                    </div>
                    <small className='website-rights'>CCC Inc copyright 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook' >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram' >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter' >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    );

}

export default Footer;