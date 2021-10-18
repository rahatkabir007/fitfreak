import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" className="navbar">
                <Container>
                    <div className="d-flex">
                        <Navbar.Brand as = {HashLink} to= "/home"><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className='nav'>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/gallery" >Gallery</Nav.Link>
                            <Nav.Link id="contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} to="/signup" >Sign Up</Nav.Link>
                            <Nav.Link as={HashLink} to="/signin">Sign In</Nav.Link>
                        </Nav>
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;