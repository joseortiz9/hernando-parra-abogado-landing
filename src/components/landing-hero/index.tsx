import React from "react";
import * as S from "./styles";
import {Container, Image} from "react-bootstrap";
import LandingGuy from "../../assets/landing-guy.png";
import DefaultButton from "../../common/default-button";
import {useVideoModal} from "../../contexts/ShowVideoModalProvider";
import { ReactComponent as PlayVideoLogo } from "../../assets/figures/video_icon.svg";
import { ReactComponent as QuoteLogo } from "../../assets/figures/comillas.svg";

const LandingHeroSection = () => {
    const { setShowVideoModal } = useVideoModal();
    return (
        <S.LandingHeroWrapper className="pt-0" id="intro-banner">
            <S.DotsDarkGreenShapeWrapper className="d-none d-md-flex" />
            <S.ContentWrapper className="d-flex align-items-md-center">
                <Container>
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
                        <DefaultButton onClick={() => setShowVideoModal(true)} className="btn-success btn-lg mt-4">
                            <PlayVideoLogo stroke="white" className="mr-1" />
                            Ver video
                        </DefaultButton>
                    </S.FeatureWrapper>
                </Container>
                <S.BannerSquareShape />
                <S.GreenCircleShapeWrapper />
                <S.WhiteCircleShapeWrapper />
                <S.DotsLightGreenShapeWrapper />
                <S.DotsLightGreenShapeRotatedWrapper />
                <S.QuoteShapeWrapper>
                    <div>
                        <QuoteLogo />
                        La mía será una rectoría de puertas abiertas
                        <QuoteLogo />
                    </div>
                </S.QuoteShapeWrapper>
                <S.LandingGuyWrapper>
                    <Image src={LandingGuy} alt="landing-guy" />
                </S.LandingGuyWrapper>
                <S.ScrollDownLabel className="d-none d-md-block">Scroll Down! &#x2192;</S.ScrollDownLabel>
            </S.ContentWrapper>
        </S.LandingHeroWrapper>
    );
};

export default LandingHeroSection;