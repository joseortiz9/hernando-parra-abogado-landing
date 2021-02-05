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
                        <S.WidthLimiterWrapper className="d-flex flex-column">
                            <TitleShadowed text="Sobre mí" className="d-flex order-0 d-md-none mb-3" translateX={-120} translateY={-50} />
                            <Fade direction="left" cascade damping={0.3} delay={200}>
                                <S.ImgShadowWrapper className="order-2 order-md-1 my-5 my-md-0 mb-md-5">
                                    <Image src={AboutMeImg} alt="about-me-banner" fluid />
                                    <S.DotsLightGreenShapeRotatedWrapper className="d-none d-sm-flex" />
                                </S.ImgShadowWrapper>
                                <p className="lead order-1 order-md-2">
                                    Es importante que la comunidad me conozca ampliamente. Mi nombre es
                                    <b>Luis Hernando Parra Nieto</b> y todos me conocen como Hernando Parra. Tengo 58 años
                                    de edad y mi relación con el <b>Externado</b> se remonta 40 años atrás, cuando pisé
                                    por primera vez el Bloque A como estudiante de primer año de Derecho en 1980.
                                    Durante mi carrera recibí las becas de honor por excelencia académica y,
                                    en quinto año, inicié como monitor en la materia de Obligaciones.
                                </p>
                                <p className="lead order-3">
                                    He sido profesor en las facultades de Derecho y Finanzas y Relaciones
                                    Internacionales, en las que he dictado los cursos de Obligaciones y
                                    Derecho Procesal Civil Especial —en pregrado—, y de Negocio Jurídico y
                                    Derecho Financiero y Bancario —en posgrado—. Varios y varias estudiantes
                                    me han honrado al postularme como su director de tesis en múltiples oportunidades.
                                    Fui director del Departamento de Derecho Civil entre los años 1994 y 1996 y, en
                                    ese año, fui nombrado Secretario General de la Universidad, cargo que desempeñé
                                    por espacio de 14 años, bajo la rectoría del Dr. Fernando Hinestrosa, y desde
                                    el cual trabajé por un Externado de puertas abiertas y, por ende,
                                    cercano a la comunidad.
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