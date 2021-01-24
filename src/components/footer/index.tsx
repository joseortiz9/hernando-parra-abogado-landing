import React from "react";
import {Container} from "react-bootstrap";
import SocialMediaContainer from "../social-media-container";

const Footer = () => {
    return (
        <footer className="bg-dark">
            <Container>
                <span className="text-white font-weight-bold">
                    &copy; 2020 SAPEEE. All rights reserved
                </span>
                <span className="ml-auto">
                    <SocialMediaContainer />
                </span>
            </Container>
        </footer>
    );
};

export default Footer;