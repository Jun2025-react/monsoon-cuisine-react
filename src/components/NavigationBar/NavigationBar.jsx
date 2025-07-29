import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import { useCart } from '../../context/CartContext';

const NavigationBar = (props) => {
    const { cartCount } = useCart();
    const [navType, setNavType] = useState(window.innerWidth < 992 ? 'mobile' : 'desktop');
    const [viewCartCount, setViewCartCount] = useState(cartCount || 0);
    const navItems = [
        { label: 'Home', path: '/' }, 
        { label: 'About', path: '/about' },
        { label: 'Menu', path: '/menu' }, 
        { label: 'Reservation', path: '/reservation' }, 
        // { label: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setNavType('mobile');
            } else {
                setNavType('desktop');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setViewCartCount(cartCount || 0);
    }, [viewCartCount, cartCount]);

    return (
        navType === "mobile" ? <MobileNavBar cartCount={viewCartCount} navItems={navItems}/> : <DesktopNavBar cartCount={viewCartCount} navItems={navItems} />

    )
};

export default NavigationBar;