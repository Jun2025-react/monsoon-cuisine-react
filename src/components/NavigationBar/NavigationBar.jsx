import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
// useWindowWidth.js

class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        window.innerWidth < 992 ? this.state = { navType : 'mobile' } : this.state = { navType : 'desktop' };

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    
    handleResize() {
        if (window.innerWidth < 992) {
            this.setState({ navType: 'mobile' });
        } else {
            this.setState({ navType: 'desktop' });
        }        
    }


    render() {
        const { navType } = this.state;
        return navType === "mobile" ? <MobileNavBar /> : <DesktopNavBar />;
    }
};

export default NavigationBar;