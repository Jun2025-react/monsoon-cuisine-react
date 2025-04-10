import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './DesktopNavBar.module.css';

    

const MobileNavBar = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="#reservation">Reservation</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className={`d-flex align-items-center ${styles.rightActions}`}>
                    <a href="#order" className= "btn btn-dark me-2" style={{width:"125px"}}>Order Online</a>
                    <a href="#profile" className= "btn me-2">
                        <i class="fas fa-user"></i>
                    </a>
                    <div class="position-relative">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                            <span className="visually-hidden">Added Items</span>
                        </span>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
} 

export default MobileNavBar;