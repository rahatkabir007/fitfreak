import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
// import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="xl" className="navbar">
                <Container>
                    <div className="d-flex">
                        <Navbar.Brand as={HashLink} to="/home"><img className='logo-img' src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className='nav'>
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/blogs">Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/gallery" id="gallery">Gallery</Nav.Link>
                            {user?.email ?
            
                                <div className= "d-lg-flex">
                                    <Nav.Link onClick={logOut} as={HashLink} to="/home">Sign Out</Nav.Link>
                                    <Navbar.Text>
                                       <p>User: {user?.displayName}</p>
                                    </Navbar.Text>
                               </div>
                                : 
                                    
                                    <Nav.Link as={HashLink} to="/signin">Sign In/Sign Up</Nav.Link>
                                
                            }
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;