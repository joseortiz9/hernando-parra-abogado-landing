import React from "react";
import {Container} from "react-bootstrap";
import SocialMediaContainer from "../../common/social-media-container";

const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <Container className="d-flex justify-content-between">
                <span className="text-white font-weight-bold">
                    &copy; 2020 SAPEEE. All rights reserved
                </span>
                <span>
                    <SocialMediaContainer />
                </span>
            </Container>
        </footer>
    );
};

export default Footer;