import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './CommonNavBar.module.css';
import ShoppingCartBtn from '../ShoppingCart/ShoppingCartBtn';

const MobileNavBar = (props) => {
    const cartCount = props.cartCount || 0;
    const navItems = props.navItems || [];

    return (
        <Navbar expand="lg" className="">
            <Container className={`${styles.noMaxWidth}`} >
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${styles.mobileNavLeft}`} />
                <div className={`d-flex align-items-left ${styles.rightActions} ${styles.mobileNavRight}`}>
                    {/* <a href="#order" className= "btn btn-dark" style={{width:"125px"}}>Order Online</a> */}
                    <a href="/profile" className="btn">
                        <i className="fas fa-user"></i>
                    </a>
                    <ShoppingCartBtn cartCount={cartCount} />

                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mb-2 mb-lg-0 text-start ">
                        {navItems.map((item, index) => (
                            <Nav.Link key={index} href={item.path} className={`px-5 py-3 ${styles.navHover}`}>
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MobileNavBar;