import React from "react";
import {Container, Image, Nav, Navbar as BootstrapNavbar, NavbarBrand} from "react-bootstrap";
import {SocialMediaContainer} from "../../components";
import HamburgMenu from "../hamburg-menu";
import LogoImg from "../../assets/logo_campaign.png";
import NavsContainer from "./navs-container";
import {Link} from "react-router-dom";

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
                <NavbarBrand as={Link} to="/"><Image src={LogoImg} height={40} /></NavbarBrand>
                <Nav className="mr-auto d-none d-md-flex">
                    <NavsContainer />
                </Nav>
                <Nav>
                    <SocialMediaContainer bgStyle={(isAtTop) ? "white" : "green"} />
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;