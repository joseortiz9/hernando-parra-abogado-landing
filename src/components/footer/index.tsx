import React from "react";
import {Container} from "react-bootstrap";
import SocialMediaContainer from "../../common/social-media-container";

const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <Container className="d-flex justify-content-md-between justify-content-center">
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