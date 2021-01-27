import React, {useState} from "react";
import Sticky, {Status} from 'react-stickynode';
import {HeaderWrapper} from "./styles";
import Navbar from "../../common/navbar";
import OverlayNavbar from "../../common/navbar/overlay";
import ShowOverlayProvider from "../../contexts/ShowOverlayProvider";

const Header = () => {
    const [ isAtTop, setIsAtTop ] = useState(true);
    const handleStateChange = (status: Status) => {
        if (status.status === Sticky.STATUS_ORIGINAL) setIsAtTop(true)
        else setIsAtTop(false)
    }
    return (
        <HeaderWrapper>
            <ShowOverlayProvider>
                <Sticky top={0} innerZ={1000} onStateChange={handleStateChange} activeClass="sticky-nav-active">
                    <Navbar isAtTop={isAtTop} />
                </Sticky>
                <OverlayNavbar />
            </ShowOverlayProvider>
        </HeaderWrapper>
    );
};

export default Header;