import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
// useWindowWidth.js

class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }

    render() {
        const { width } = this.state;
        return width < 992 ? <MobileNavBar /> : <DesktopNavBar />;
    }
};

export default NavigationBar;