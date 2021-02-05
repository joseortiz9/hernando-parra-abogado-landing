import React from "react";
import * as S from "./styles";
import {Container, Image} from "react-bootstrap";
import LandingGuy from "../../assets/landing-guy.png";
import DefaultButton from "../../common/default-button";
import {useVideoModal} from "../../contexts/ShowVideoModalProvider";
import { ReactComponent as PlayVideoLogo } from "../../assets/figures/video_icon.svg";
import { ReactComponent as QuoteLogo } from "../../assets/figures/comillas.svg";
import {Fade} from "react-awesome-reveal";

const LandingHeroSection = () => {
    const { setShowVideoModal } = useVideoModal();
    return (
        <S.LandingHeroWrapper className="pt-0" id="intro-banner">
            <S.DotsDarkGreenShapeWrapper className="d-none d-md-flex" />
            <S.ContentWrapper className="d-flex align-items-md-center">
                <Container>
                    <Fade direction="left" cascade>
                        <S.FeatureWrapper>
                            <h1 className="font-weight-bold">
                                Hernando Parra Nieto
                            </h1>
                            <h1 className="subtitle mt-4">
                                Candidato a rector
                            </h1>
                            <p className="lead mt-2">
                                Profesor <b>Emérito</b> y <b>abogado con más de 30
                                años de experiencia</b> de la Universidad Externado de Colombia.
                            </p>
                            <DefaultButton
                                onClick={() => document.getElementById("video-section")?.scrollIntoView({behavior: "smooth"}) /*setShowVideoModal(true)*/}
                                className="btn-success d-none d-sm-block w-auto btn-lg mt-1 mt-sm-4"
                            >
                                <PlayVideoLogo stroke="white" className="mr-1" />
                                Ver video
                            </DefaultButton>
                        </S.FeatureWrapper>
                    </Fade>
                </Container>
                <S.BannerSquareShape />
                <S.GreenCircleShapeWrapper />
                <S.WhiteCircleShapeWrapper />
                <S.DotsLightGreenShapeWrapper />
                <S.DotsLightGreenShapeRotatedWrapper />
                <Fade delay={500}>
                    <S.QuoteShapeWrapper>
                        <div>
                            <QuoteLogo />
                            La mía será una rectoría de puertas abiertas
                            <QuoteLogo />
                        </div>
                    </S.QuoteShapeWrapper>
                </Fade>
                <S.LandingGuyWrapper>
                    <Image src={LandingGuy} alt="landing-guy" />
                </S.LandingGuyWrapper>
                <S.ScrollDownLabel className="d-none d-md-block">Scroll Down! &#x2192;</S.ScrollDownLabel>
            </S.ContentWrapper>
        </S.LandingHeroWrapper>
    );
};

export default LandingHeroSection;