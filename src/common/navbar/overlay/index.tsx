import React from "react";
import {OverlayContent, OverlayWrapper, CloseButtonWrapper} from "./styles";
import {navsLanding} from "../../../router/NavsLanding";
import NavLink from "../nav-link";
import {useShowOverlay} from "../../../contexts/ShowOverlayProvider";
import {SocialMediaContainer} from "../../../components";

const OverlayNavbar = () => {
    const {showOverlay, setShowOverlay} = useShowOverlay();
    return(
        <OverlayWrapper isOpen={showOverlay}>
            <CloseButtonWrapper onClick={() => setShowOverlay(false)} />
            <OverlayContent className="h-75 d-flex justify-content-center align-content-center flex-column">
                {
                    navsLanding.map((nav) => (
                        <NavLink key={nav.hrefID} hrefID={nav.hrefID}>
                            <span dangerouslySetInnerHTML={{__html: nav.content}} />
                        </NavLink>
                    ))
                }
                <SocialMediaContainer classes="mt-4" />
            </OverlayContent>
            <div className="py-4 text-center mt-auto text-white font-weight-bold">
                &copy; 2020 Juan Pérez. All rights reserved
            </div>
        </OverlayWrapper>
    );
};

export default OverlayNavbar;