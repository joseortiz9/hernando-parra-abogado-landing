import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap";
import {ImgShadowWrapper, TitleShadowed, WidthLimiterWrapper} from "./styles";
import AboutMeImg from "../../assets/about-me.jpg";

const AboutMeSection = () => {
    return (
        <section id="about-me">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="order-2 order-md-1">
                        <WidthLimiterWrapper>
                            <ImgShadowWrapper>
                                <Image src={AboutMeImg} alt="about-me-banner" fluid />
                            </ImgShadowWrapper>
                        </WidthLimiterWrapper>
                    </Col>
                    <Col xs={12} md={6} className="order-1 order-md-2">
                        <WidthLimiterWrapper>
                            <TitleShadowed className="mb-3">Sobre mí</TitleShadowed>
                            <p className="lead">
                                Mi nombre es Luís Hernando Parra Nieto, soy abogado graduado de la
                                Universidad Externado de Colombia en 1985, con más de 30 años de
                                experiencia en litigio en procesos declarativos, ejecutivos, acciones
                                populares y de grupo. He complementado mi formación académica con cursos
                                de Perfeccionamiento en derecho fiduciario realizados en Brasil, y en derecho
                                anglosajón, IDL Washington 1995. Además, poseo un diplomado en Arbitraje
                                Internacional en la Cámara de Comercio Internacional, París 2003. Tengo un Máster
                                en Derecho LLM de Boston University Law School y un diplomado en Negociación de
                                Controversias de Harvard Law School.
                            </p>
                        </WidthLimiterWrapper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMeSection;