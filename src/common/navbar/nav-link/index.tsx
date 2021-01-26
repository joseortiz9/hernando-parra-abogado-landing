import React, {FC} from "react";
import {Nav} from "react-bootstrap";
import {useShowOverlay} from "../../../contexts/ShowOverlayProvider";

interface INavLinkProps {
    hrefID: string
}

const NavLink: FC<INavLinkProps> = ({children, hrefID}) => {
    const { showOverlay, setShowOverlay } = useShowOverlay();
    const handleNavCLick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (showOverlay)
            setShowOverlay(false);
        scrollTo(hrefID);
    };
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return(
        <Nav.Link onClick={handleNavCLick}>
            {children}
        </Nav.Link>
    );
};

export default NavLink;