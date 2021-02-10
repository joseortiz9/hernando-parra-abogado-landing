import React from "react";
import {Container, Image} from "react-bootstrap";
import SocialMediaContainer from "../../common/social-media-container";
import LogoImg from "../../assets/logo_campaign.png";

const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <Container className="d-flex justify-content-md-between justify-content-center align-items-center">
                <Image src={LogoImg} />
                <span className="text-white font-weight-bold">
                    &copy; 2020 Hernando Parra. All rights reserved
                </span>
                <span className="d-none d-md-flex">
                    <SocialMediaContainer />
                </span>
            </Container>
        </footer>
    );
};

export default Footer;