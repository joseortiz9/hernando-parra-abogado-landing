import React, {useState} from "react";
import {useVideoModal} from "../../contexts/ShowVideoModalProvider";
import {ModalWrapper} from "./styles";
import SpinLoader from "../spinner";

interface IVideoModalProps {
    videoTag: "iframe" | "video"
    videoUrl: string
}

const VideoModal = ({videoTag, videoUrl}: IVideoModalProps) => {
    const { showVideoModal, setShowVideoModal } = useVideoModal();
    const [ loadingIframe, setLoadingIframe ] = useState(true);
    const closeModal = () => {
        setShowVideoModal(false);
        setLoadingIframe(true);
    }
    return(
        <ModalWrapper show={showVideoModal} onHide={() => closeModal()} size="lg" centered>
            { loadingIframe && <SpinLoader /> }
            <div className="embed-responsive embed-responsive-16by9">
                {videoTag === "iframe" ?
                    <iframe src={videoUrl} frameBorder="0"
                            title="Presentation video"
                            allow="autoplay;"
                            className="embed-responsive-item"
                            onLoad={()=> setLoadingIframe(false)}
                            allowFullScreen /> :
                    <video controls className="embed-responsive-item" src={videoUrl} />
                }
            </div>
        </ModalWrapper>
    );
};

export default VideoModal;