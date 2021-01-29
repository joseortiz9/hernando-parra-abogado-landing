import React from "react";
import {
    AboutMeSection,
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
            <ScrollToTop />
            <LandingHeroSection />
            <TimeToChangeSection />
            <div className="bgSectionsWrapper">
                <AboutMeSection />
                <PrinciplesValuesSection />
            </div>
            <ManagementPlanSection />
            <VideoSection />
        </ShowVideoModalProvider>
    );
};

export default Home;