import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        CCC Inc<i className='fas fa-paw' />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'bi-x-square bi-times' : 'bi-list bi-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                        </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                        </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/volunteer" className="nav-links" onClick={closeMobileMenu}>
                                Volunteer
                        </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                        </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/donate" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Donate
                        </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>DONATE</Button>}

                </div>
            </nav>
        </>
    );
}

export default Navbar;
