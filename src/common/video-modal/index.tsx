import React from "react";
import {useVideoModal} from "../../contexts/ShowVideoModalProvider";
import {ModalWrapper} from "./styles";

interface IVideoModalProps {
    videoTag: "iframe" | "video"
    videoUrl: string
}

const VideoModal = ({videoTag, videoUrl}: IVideoModalProps) => {
    const { showVideoModal, setShowVideoModal } = useVideoModal();
    return(
        <ModalWrapper show={showVideoModal} onHide={() => setShowVideoModal(false)} size="lg" centered>
            <div className="embed-responsive embed-responsive-16by9">
                {videoTag === "iframe" ?
                    <iframe src={videoUrl} frameBorder="0"
                            title="Presentation video"
                            allow="autoplay;"
                            className="embed-responsive-item"
                            allowFullScreen /> :
                    <video controls className="embed-responsive-item" src={videoUrl} />
                }
            </div>
        </ModalWrapper>
    );
};

export default VideoModal;