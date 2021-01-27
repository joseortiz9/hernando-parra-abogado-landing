import React from "react";
import {Container, Nav, Navbar as BootstrapNavbar} from "react-bootstrap";
import {SocialMediaContainer} from "../../components";
import HamburgMenu from "../hamburg-menu";
import NavLink from "./nav-link";
import {navsLanding} from "../../router/NavsLanding";

const Navbar = () => {
    return (
        <BootstrapNavbar>
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
                    <SocialMediaContainer bgStyle="green" />
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;