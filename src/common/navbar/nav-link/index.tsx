import React from "react";
import {Nav} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {useShowOverlay} from "../../../contexts/ShowOverlayProvider";

const NavLink = ({sectionID, hrefID, content}: INavLinkProps) => {
    const history = useHistory();
    const { showOverlay, setShowOverlay } = useShowOverlay();
    const handleNavCLick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (hrefID) history.push(hrefID);
        e.preventDefault();
        if (showOverlay) setShowOverlay(false);
        if (sectionID) scrollTo(sectionID);
    };
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return(
        <Nav.Link className={hrefID && "router-link"} onClick={handleNavCLick}>
            <span dangerouslySetInnerHTML={{__html: content}} />
        </Nav.Link>
    );
};

export default NavLink;