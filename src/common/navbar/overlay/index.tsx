import React from "react";
import {OverlayContent, OverlayWrapper, CloseButtonWrapper} from "./styles";
import {useShowOverlay} from "../../../contexts/ShowOverlayProvider";
import {SocialMediaContainer} from "../../../components";
import {Image} from "react-bootstrap";
import LogoImg from "../../../assets/logo_campaign.png";
import NavsContainer from "../navs-container";

const OverlayNavbar = () => {
    const {showOverlay, setShowOverlay} = useShowOverlay();
    return(
        <OverlayWrapper isOpen={showOverlay}>
            <CloseButtonWrapper onClick={() => setShowOverlay(false)} />
            <OverlayContent className="h-75 d-flex justify-content-center align-content-center flex-column">
                <span><Image src={LogoImg} height={40} width={60} className="mb-3" /></span>
                <NavsContainer />
                <SocialMediaContainer classes="mt-4" />
            </OverlayContent>
            <div className="py-4 text-center mt-auto text-white font-weight-bold">
                &copy; 2020 Juan Pérez. All rights reserved
            </div>
        </OverlayWrapper>
    );
};

export default OverlayNavbar;