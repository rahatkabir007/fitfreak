import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../images/logo.png';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" className="navbar">
                <Container>
                    <div className="d-flex">
                        <Navbar.Brand href="#home"><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className='nav'>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#gallery" >Gallery</Nav.Link>
                            <Nav.Link href="#contact" id="contact">Contact</Nav.Link>
                            <Nav.Link href="#signup" >Sign Up</Nav.Link>
                            <Nav.Link href="#signin">Sign In</Nav.Link>
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