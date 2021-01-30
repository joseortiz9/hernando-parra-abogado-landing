import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import {ImgShadowWrapper, WidthLimiterWrapper, AboutMeSectionWrapper, ContainerWrapper} from "./styles";
import AboutMeImg from "../../assets/about-me.jpg";
import CvPdf from "../../assets/cv-test.pdf";
import TitleShadowed from "../../common/title-shadowed";
import 'react-vertical-timeline-component/style.min.css';
import SimpleTimeline from "../../common/simple-timeline";
import {ReactComponent as DownloadLogo} from "../../assets/figures/download_icon.svg";
import DefaultButton from "../../common/default-button";

const AboutMeSection = () => {
    return (
        <AboutMeSectionWrapper id="about-me">
            <ContainerWrapper>
                <Row>
                    <Col xs={12} md={6}>
                        <WidthLimiterWrapper>
                            <TitleShadowed text="Sobre mí" className="d-flex d-md-none mb-5" translateX={-120} translateY={-50} />
                            <ImgShadowWrapper>
                                <Image src={AboutMeImg} alt="about-me-banner" fluid />
                            </ImgShadowWrapper>
                            <p className="lead">
                                Mi nombre es <b>Hernando Parra Nieto</b>, tengo 58 años y he sido a lo largo de mi
                                vida un “<b>externadista de tiempo completo</b>”. Empecé mi carrera universitaria en
                                el Externado como monitor en la facultad de derecho, he sido profesor hasta
                                la fecha, fui director del Departamento de Derecho Civil y asumí la Secretaría
                                General de la Universidad durante 14 años, bajo la rectoría de Fernando
                                Hinestrosa, que fue un espacio con las puertas abiertas para construir un
                                Externado participativo y cercano.
                            </p>
                            <p className="lead">
                                Hoy quiero ser Rector del Externado porque tengo una visión amplia y orientada
                                al futuro de nuestra universidad, que propongo hacer realidad de la mano de la
                                comunidad externadista.  Mi plan de desarrollo y gestión universitaria se llama
                                “<b>Externado 2027: volvernos a encontrar</b>”. Aquí les presento los principios de una
                                rectoría abierta y comprometida con cada miembro de la comunidad externadista,
                                así como los objetivos estratégicos y las estrategias que orientarán nuestra gestión.
                            </p>
                            <a href={CvPdf} target="_blank" rel="noreferrer">
                                <DefaultButton onClick={() => {}} className="btn-success py-2 px-3 mt-3">
                                    <DownloadLogo stroke="white" className="mr-1" />
                                    Descargar CV
                                </DefaultButton>
                            </a>
                        </WidthLimiterWrapper>
                    </Col>
                    <Col xs={12} md={6}>
                        <WidthLimiterWrapper>
                            <TitleShadowed text="Sobre mí" className="d-none d-md-flex mb-3" translateX={-120} translateY={-50} />
                        </WidthLimiterWrapper>
                        <SimpleTimeline  />
                    </Col>
                </Row>
            </ContainerWrapper>
        </AboutMeSectionWrapper>
    );
};

export default AboutMeSection;