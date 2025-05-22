import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import { useCart } from '../../context/CartContext';

const NavigationBar = (props) => {
    const { cartData } = useCart();
    const [navType, setNavType] = useState(window.innerWidth < 992 ? 'mobile' : 'desktop');
    const [cartCount, setCartCount] = useState(cartData.count || 0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setNavType('mobile');
            } else {
                setNavType('desktop');
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        navType === "mobile" ? <MobileNavBar cartCount={cartCount}/> : <DesktopNavBar cartCount={cartCount}/>

    )
};

export default NavigationBar;