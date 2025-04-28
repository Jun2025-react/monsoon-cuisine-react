import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './CommonNavBar.module.css';

    
const DesktopNavBar = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="monsoon-indian-cuisine-logo.png"
                        width="150"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="#reservation">Reservation</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                    <div className={`d-flex align-items-center ${styles.rightActions}`}>
                        <a href="#order" className= "btn btn-dark" style={{width:"125px"}}>Order Online</a>
                        <a href="#profile" className= "btn">
                            <i className="fas fa-user"></i>
                        </a>
                        <div className="position-relative btn">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                                <span className="visually-hidden">Added Items</span>
                            </span>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default DesktopNavBar;