import React, {useState} from "react";
import Sticky from 'react-stickynode';
import {HeaderWrapper} from "./styles";
import Navbar from "../../common/navbar";
import OverlayNavbar from "../../common/navbar/overlay";
import ShowOverlayProvider from "../../contexts/ShowOverlayProvider";

const Header = () => {
    return (
        <HeaderWrapper>
            <ShowOverlayProvider>
                <Sticky top={0} innerZ={1000} activeClass="sticky-nav-active">
                    <Navbar />
                </Sticky>
                <OverlayNavbar />
            </ShowOverlayProvider>
        </HeaderWrapper>
    );
};

export default Header;