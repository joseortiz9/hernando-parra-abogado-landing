import React from "react";
import {Container, Nav, Navbar as BootstrapNavbar} from "react-bootstrap";
import {SocialMediaContainer} from "../../components";
import HamburgMenu from "../hamburg-menu";
import NavLink from "./nav-link";
import {navsLanding} from "../../router/NavsLanding";

interface INavbarProps {
    isAtTop: boolean
}

const Navbar = ({isAtTop}: INavbarProps) => {
    return (
        <BootstrapNavbar fixed="top">
            <Container>
                <span className="d-md-none">
                    <HamburgMenu />
                </span>
                <Nav className="mr-auto d-none d-md-flex">
                    {
                        navsLanding.map((nav) => (
                            <NavLink key={nav.hrefID} hrefID={nav.hrefID}>
                                <span dangerouslySetInnerHTML={{__html: nav.content}} />
                            </NavLink>
                        ))
                    }
                </Nav>
                <Nav>
                    <SocialMediaContainer bgStyle={(isAtTop) ? "white" : "green"} />
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;