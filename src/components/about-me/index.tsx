import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import * as S from "./styles";
import AboutMeImg from "../../assets/about-me.jpg";
import CvPdf from "../../assets/documents/cv-hernando-parra-final.pdf";
import TitleShadowed from "../../common/title-shadowed";
import 'react-vertical-timeline-component/style.min.css';
import SimpleTimeline from "../../common/simple-timeline";
import {ReactComponent as DownloadLogo} from "../../assets/figures/download_icon.svg";
import DefaultButton from "../../common/default-button";
import {Fade} from "react-awesome-reveal";

const AboutMeSection = () => {
    return (
        <S.AboutMeSectionWrapper id="about-me">
            <S.ContainerWrapper>
                <S.DotsLightGreenShapeWrapper />
                <Row>
                    <Col xs={12} md={6}>
                        <S.WidthLimiterWrapper className="d-flex flex-wrap">
                            <TitleShadowed text="Sobre mí" className="d-flex order-0 d-md-none mb-3" translateX={-120} translateY={-50} />
                            <Fade direction="left" cascade delay={200}>
                                <S.ImgShadowWrapper className="order-2 order-md-1 my-5 my-md-0 mb-md-5">
                                    <Image src={AboutMeImg} alt="about-me-banner" fluid />
                                    <S.DotsLightGreenShapeRotatedWrapper className="d-none d-sm-flex" />
                                </S.ImgShadowWrapper>
                                <p className="lead order-1 order-md-2">
                                    Mi nombre es <b>Hernando Parra Nieto</b>, tengo 58 años y he sido a lo largo de mi
                                    vida un “<b>externadista de tiempo completo</b>”. Empecé mi carrera universitaria en
                                    el Externado como monitor en la facultad de derecho, he sido profesor hasta
                                    la fecha, fui director del Departamento de Derecho Civil y asumí la Secretaría
                                    General de la Universidad durante 14 años, bajo la rectoría de Fernando
                                    Hinestrosa, que fue un espacio con las puertas abiertas para construir un
                                    Externado participativo y cercano.
                                </p>
                                <p className="lead order-3">
                                    Hoy quiero ser Rector del Externado porque tengo una visión amplia y orientada
                                    al futuro de nuestra universidad, que propongo hacer realidad de la mano de la
                                    comunidad externadista.  Mi plan de desarrollo y gestión universitaria se llama
                                    “<b>Externado 2027: volvernos a encontrar</b>”. Aquí les presento los principios de una
                                    rectoría abierta y comprometida con cada miembro de la comunidad externadista,
                                    así como los objetivos estratégicos y las estrategias que orientarán nuestra gestión.
                                </p>
                                <DefaultButton href={CvPdf} target="_blank" className="btn-success py-3 py-md-2 px-3 order-4 mt-3 mb-5 mb-md-3">
                                    <DownloadLogo stroke="white" className="mr-1" />
                                    Descargar CV
                                </DefaultButton>
                            </Fade>
                        </S.WidthLimiterWrapper>
                    </Col>
                    <Col xs={12} md={6}>
                        <S.WidthLimiterWrapper>
                            <Fade direction="right">
                            <TitleShadowed text="Sobre mí" className="d-none d-md-flex mb-5" translateX={-120} translateY={-50} />
                            </Fade>
                        </S.WidthLimiterWrapper>
                        <SimpleTimeline />
                    </Col>
                </Row>
            </S.ContainerWrapper>
        </S.AboutMeSectionWrapper>
    );
};

export default AboutMeSection;