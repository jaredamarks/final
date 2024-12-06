//Header.js 
import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import { FontAwesomeIcon } 
from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin, } 
from '@fortawesome/free-brands-svg-icons'; 
import { 
faInfoCircle, faCode, 
faFileAlt, faEnvelope, 
faPen
} 
from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

import './Header.css'; 
import './style.css'; 

const Header = () => { 
return ( 
    <Navbar bg="dark" expand="lg" className="custom-navbar shadow-sm">
            {/* Brand Name */}
            <Navbar.Brand as={Link} to="/" className="brand-name">
                <span className="display-4 text-white">Jared Marks</span>
            </Navbar.Brand>

            {/* Toggler Button */}
            <Navbar.Toggle aria-controls="navbarNav" />

            {/* Collapsible Links */}
            <Navbar.Collapse id="navbarNav" className="text-white">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">
                        <span>About</span>
                        <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-light" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/projects">
                        <span>Projects</span>
                        <FontAwesomeIcon icon={faCode} className="ml-2 text-light" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/resume">
                        <span>Resume</span>
                        <FontAwesomeIcon icon={faFileAlt} className="ml-2 text-light" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                        <span>Contact</span>
                        <FontAwesomeIcon icon={faEnvelope} className="ml-2 text-light" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/guestbook">
                        <span>GuestBook</span>
                        <FontAwesomeIcon icon={faPen} className="ml-2 text-light" />
                    </Nav.Link>
                </Nav>

                {/* Social Links */}
                <Nav className="ml-auto">
                    <Nav.Link href="https://github.com/jaredamarks" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" className="text-light" />
                    </Nav.Link>
                    <Nav.Link href="https://linkedin.com/in/jared-marks-a16b552a1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-light" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
