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
import ScrollToTop from "../../common/scroll-to-top";
import ShowVideoModalProvider from "../../contexts/ShowVideoModalProvider";
import VideoModal from "../../common/video-modal";

const Home = () => {
    return(
        <ShowVideoModalProvider>
            <VideoModal videoTag="iframe" videoUrl="https://www.youtube.com/embed/T3-StLLMRGk" />
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