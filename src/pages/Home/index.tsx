import React from "react";
import {AboutMeSection, CareerPathSection, LandingHeroSection} from "../../components";
import ScrollToTop from "../../common/scroll-to-top";

const Home = () => {
    return(
        <>
            <ScrollToTop />
            <LandingHeroSection />
            <AboutMeSection />
            <CareerPathSection />
        </>
    );
};

export default Home;