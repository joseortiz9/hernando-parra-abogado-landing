import React from "react";
import {
    AboutMeSection,
    ContactUsSection,
    LandingHeroSection,
    ManagementPlanSection,
    PrinciplesValuesSection,
    TimeToChangeSection,
    VideoSection
} from "../../components";
import ShowVideoModalProvider from "../../contexts/ShowVideoModalProvider";
import VideoModal from "../../common/video-modal";

const Home = () => {
    return(
        <ShowVideoModalProvider>
            <VideoModal videoTag="iframe" videoUrl="https://www.youtube.com/embed/L99qBAhTcYw" />
            <LandingHeroSection />
            <TimeToChangeSection />
            <div className="bgSectionsWrapper">
                <AboutMeSection />
                <PrinciplesValuesSection />
            </div>
            <ManagementPlanSection />
            <VideoSection />
            <ContactUsSection />
        </ShowVideoModalProvider>
    );
};

export default Home;