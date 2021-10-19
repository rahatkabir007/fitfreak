import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex justify-content-around align-items-center second-section">
                <div className="list-items">
                    <ul>
                        <li> <NavLink to='/home'>Home</NavLink></li>
                        <li> <NavLink to='/services'>Services</NavLink></li>
                        <li> <NavLink to='/blog'>Blog</NavLink></li>
                        <li> <NavLink to='/aboutus'>About Us</NavLink></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <ul>
                        <li className="text-center">Contact Us</li>
                        <li><i className="fas fa-phone"></i>  +88018942323324</li>
                        <li><i className="fas fa-envelope-open"></i>  fitfreak@gmail.com</li>
                        <li><i className="fas fa-address-card"></i>  24 Street, California,USA</li>
                    </ul>

                </div>
                <div className="subscribe">
                    <Form className="">
                        <FormControl
                            type="search"
                            placeholder="Subscribe"
                            className="mb-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Subscribe</Button>
                    </Form>
                </div>
            </div>
            <div className="copyright-text" >
                <p>Copyright ©2021 All rights reserved | This Project is Done By Rahat</p>
            </div>
        </div>
    );
};

export default Footer;