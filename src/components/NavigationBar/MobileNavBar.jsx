import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './CommonNavBar.module.css';


const MobileNavBar = (props) => {
    const cartCount = props.cartCount || 0;
    
    return (
        <Navbar expand="lg" className="">
            <Container className={`${styles.noMaxWidth}`} >
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${styles.mobileNavLeft}`} />
                <div className={`d-flex align-items-left ${styles.rightActions} ${styles.mobileNavRight}`}>
                    <a href="#order" className= "btn btn-dark" style={{width:"125px"}}>Order Online</a>
                    <a href="#profile" className= "btn">
                        <i className="fas fa-user"></i>
                    </a>
                    <div className="position-relative btn">
                        <i className="fas fa-shopping-cart"></i>
                        {cartCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartCount}
                            <span className="visually-hidden">Added Items</span>
                        </span>}
                    </div>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mb-2 mb-lg-0 text-start ">
                        <Nav.Link href="/" className={`px-5 py-3 ${styles.navHover}`}>Home</Nav.Link>
                        <Nav.Link href="/about" className={`px-5 py-3 ${styles.navHover}`}>About</Nav.Link>
                        <Nav.Link href="/menu" className={`px-5 py-3 ${styles.navHover}`}>Menu</Nav.Link>
                        <Nav.Link href="#reservation" className={`px-5 py-3 ${styles.navHover}`}>Reservation</Nav.Link>
                        <Nav.Link href="#contact" className={`px-5 py-3 ${styles.navHover}`}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 

export default MobileNavBar;