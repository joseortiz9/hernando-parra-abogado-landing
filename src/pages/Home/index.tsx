import React from "react";
import {
    AboutMeSection,
    LandingHeroSection,
    ManagementPlanSection,
    PrinciplesValuesSection,
    TimeToChangeSection
} from "../../components";
import ScrollToTop from "../../common/scroll-to-top";

const Home = () => {
    return(
        <>
            <ScrollToTop />
            <LandingHeroSection />
            <TimeToChangeSection />
            <div className="bgSectionsWrapper">
                <AboutMeSection />
                <PrinciplesValuesSection />
            </div>
            <ManagementPlanSection />
        </>
    );
};

export default Home;