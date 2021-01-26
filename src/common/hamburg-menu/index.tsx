import React from "react";
import {HamburgMenuWrapper} from "./styles";
import {useShowOverlay} from "../../contexts/ShowOverlayProvider";

const HamburgMenu = () => {
    const {setShowOverlay} = useShowOverlay();
    return(
        <HamburgMenuWrapper onClick={() => setShowOverlay(true)}>
            <span />
            <span />
            <span />
        </HamburgMenuWrapper>
    );
};

export default HamburgMenu;