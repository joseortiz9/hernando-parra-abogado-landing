import React from "react";
import {Container, Nav, Navbar as BootstrapNavbar} from "react-bootstrap";
import {SocialMediaContainer} from "../../components";

const Navbar = () => {
    return (
        <BootstrapNavbar bg="light">
            <Container>
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Acerca de</Nav.Link>
                    <Nav.Link href="#pricing">Plan de gobierno</Nav.Link>
                    <Nav.Link href="#pricing">Video</Nav.Link>
                </Nav>
                <Nav>
                    <SocialMediaContainer />
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;