import React from "react";
import {BannerSquareShape, LandingHeroWrapper, LandingGuyWrapper, FeatureWrapper, ScrollDownLabel} from "./styles";
import {Button, Container, Image} from "react-bootstrap";
import LandingGuy from "../../assets/landing-guy.png";

const LandingHeroSection = () => {
    return (
        <LandingHeroWrapper className="d-flex align-items-center">
            <BannerSquareShape />
            <LandingGuyWrapper>
                <Image src={LandingGuy} alt="landing-guy" />
            </LandingGuyWrapper>
            <ScrollDownLabel className="d-none d-md-block">Scroll Down! &#x2192;</ScrollDownLabel>
            <Container>
                <FeatureWrapper>
                    <h1 className="font-weight-bold">
                        Hernando Parra Nieto
                    </h1>
                    <h1 className="subtitle mt-4">
                        Candidato a rector
                    </h1>
                    <p className="lead mt-2">
                        Profesor Emérito y abogado con más de 30 años de experiencia de la Universidad Externado de Colombia.
                    </p>
                    <Button className="btn-success btn-lg mt-4">Ver video</Button>
                </FeatureWrapper>
            </Container>
        </LandingHeroWrapper>
    );
};

export default LandingHeroSection;