import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './CommonNavBar.module.css';

import ShoppingCartBtn from '../ShoppingCart/ShoppingCartBtn';
import { useAuth } from '../../context/AuthContext';

const DesktopNavBar = (props) => {

    const cartCount = props.cartCount || 0;
    const { user, isAuthenticated } = useAuth();
    const page = isAuthenticated ? "/profile" : "/login";
    const navItems = props.navItems || []
    
    useEffect(() => {
        // console.log("DesktopNavBar user:", user);
        // console.log("DesktopNavBar isAuthenticated:", isAuthenticated);
    }, [user, isAuthenticated]);

    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="/">
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
                        { navItems.length > 0 && navItems.map((item, index) => (
                            <Nav.Link key={index} href={item.path}>
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <div className={`d-flex align-items-center ${styles.rightActions}`}>
                        {/* <a href="#order" className="btn btn-dark" style={{ width: "125px" }}>Order Online</a> */}
                        <a href={page} className="btn">
                            <i className="fas fa-user"></i>
                        </a>
                        <ShoppingCartBtn cartCount={cartCount} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default DesktopNavBar;