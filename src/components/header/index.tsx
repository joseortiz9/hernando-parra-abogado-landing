import React from "react";
import Sticky from 'react-stickynode';
import Navbar from "../../common/navbar";

const Header = () => {
    return (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
        </Sticky>
    );
};

export default Header;