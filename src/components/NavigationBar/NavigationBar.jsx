import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import { useCart } from '../../context/CartContext';

const NavigationBar = (props) => {
    const { cartCount } = useCart();
    const [navType, setNavType] = useState(window.innerWidth < 992 ? 'mobile' : 'desktop');
    const [viewCartCount, setViewCartCount] = useState(cartCount || 0);

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
        navType === "mobile" ? <MobileNavBar cartCount={viewCartCount} /> : <DesktopNavBar cartCount={viewCartCount} />

    )
};

export default NavigationBar;