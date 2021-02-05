import React from "react";
import {Container, Image} from "react-bootstrap";
import {PlayButtonWrapper, SectionWrapper, VideoWrapper} from "./styles";
import { ReactComponent as VideoReproducerLogo } from "../../assets/figures/video_icon.svg";
import BgVideoImg from "../../assets/video-img.png";
import {useVideoModal} from "../../contexts/ShowVideoModalProvider";
import {Fade} from "react-awesome-reveal";

const VideoSection = () => {
    const { setShowVideoModal } = useVideoModal();
    return(
        <SectionWrapper id="video-section" className="pb-5 mb-4">
            <Container>
                <Fade>
                    <h1>Próximamente encontrarás un video en esta sección</h1>
                    <VideoWrapper className="mt-4 shadow" onClick={() => {}/*setShowVideoModal(true)*/}>
                        {/*<PlayButtonWrapper>*/}
                        {/*    <VideoReproducerLogo fill="white" stroke="#01A85B" />*/}
                        {/*</PlayButtonWrapper>*/}
                        <Image className="w-100" src={BgVideoImg} fluid />
                    </VideoWrapper>
                </Fade>
            </Container>
        </SectionWrapper>
    );
};

export default VideoSection;