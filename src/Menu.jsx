import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import phone from './assets/images/phone.png';
import mobile from './assets/images/mobile_menu.png';
import whitelogo from './assets/images/foot_lg.png';
import header_i from './assets/images/phone_f.png';

function Menu() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onplans = () => setIsActive(!isActive);
    const [isOpen, setIsOpen] = useState(false);
    const onservice = () => setIsOpen(!isOpen);

    const [show, setShow] = useState(false);
    const toggleClass = () => {
        setShow(!show);
    };
    return (
        <>
            {/* Navbar */}
            <Navbar collapseOnSelect className="header" expand="xl">
                <div className="header_left">
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Acclaimed Logo" className="black_logo" />
                        <img src={whitelogo} alt="Acclaimed Logo1" className="white_logo" />
                    </Navbar.Brand>
                    <div className="mobile_menu">
                        <img src={mobile} onClick={toggleClass} />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" className={show ? "active" : "hidenav"}>
                        <div className="mob_menu">
                            <Nav className='mr-auto'>
                                <NavLink exact className="nav-link" activeClassName="active" to="/home-warranty">Home Warranty</NavLink>
                                <NavLink exact className="nav-link" activeClassName="active" to="/order-now">ORDER NOW</NavLink>
                                <div className="menu-container">
                                    <button onClick={onplans} className="menu-trigger">
                                        <span>Home Protection Plans</span>
                                    </button>
                                    <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                                        <ul>
                                            <li><a href="/brochures">Brochures</a></li>
                                            <li><a href="/member-advantages">Member Advantages</a></li>
                                            <li><a href="/home-warranty-faqs">FAQ</a></li>
                                            <li><a href="/make-a-claim">Make A Claim</a></li>
                                            <li><a href="/renewals">Renewals</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="menu-container">
                                    <button onClick={onservice} className="menu-trigger last_menu">
                                        <span>Service Center</span>
                                    </button>
                                    <nav ref={dropdownRef} className={`menu ${isOpen ? 'active' : 'inactive'}`}>
                                        <ul>
                                            <li><a href="/contractors">Contractors</a></li>
                                            <li><a href="/about-us">About Us</a></li>
                                            <li><a href="/contact-us">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </div>
                <div className="header_right">
                    <div className="top-menu">
                        <span className="call_i">
                            <img src={phone} alt="phone" className="black_phone" />
                            <img src={header_i} className="white_phone" /></span>
                        <span className="call_t"><a href="#">Toll-Free 888.494.9460</a> </span>
                    </div>
                    <div className="login-btn">
                        <a href="#">Login</a>
                    </div>
                </div>
            </Navbar>
        </>
    );
}
export default Menu;