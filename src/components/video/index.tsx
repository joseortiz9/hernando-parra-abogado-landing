import React from "react";
import {Container, Image} from "react-bootstrap";
import {PlayButtonWrapper, VideoWrapper} from "./styles";
import { ReactComponent as VideoReproducerLogo } from "../../assets/figures/video_icon.svg";
import {useVideoModal} from "../../contexts/ShowVideoModalProvider";

const VideoSection = () => {
    const { setShowVideoModal } = useVideoModal();
    return(
        <section id="video-section">
            <Container>
                <VideoWrapper onClick={() => setShowVideoModal(true)}>
                    <PlayButtonWrapper>
                        <VideoReproducerLogo fill="white" stroke="#01A85B" />
                    </PlayButtonWrapper>
                    <Image className="w-100" src="https://via.placeholder.com/1000x500" fluid />
                </VideoWrapper>
            </Container>
        </section>
    );
};

export default VideoSection;