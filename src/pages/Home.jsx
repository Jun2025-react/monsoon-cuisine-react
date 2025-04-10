import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import MenuSections from '../components/Home/MenuSections';
import InfoSection from '../components/Home/InfoSection';

function Home () {
    return (
        <div>
            <HeroSection />
            <MenuSections />
            <InfoSection />
        </div>
    )
}


export default Home;