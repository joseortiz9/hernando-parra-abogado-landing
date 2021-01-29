import React from "react";
import {Col, Container, Row, Image, Button} from "react-bootstrap";
import {ImgShadowWrapper, WidthLimiterWrapper} from "./styles";
import AboutMeImg from "../../assets/about-me.jpg";
import TitleShadowed from "../../common/title-shadowed";

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
                            <TitleShadowed text="Sobre mí" className="mb-3" translateX={-120} translateY={-50} />
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



            <Container>
                <Row>
                    <Col xs={12} md={6} className="d-flex">
                        <div className="d-flex justify-content-center flex-column-reverse flex-md-column">
                            <p className="lead">
                                Mi desempeño profesional se ha orientado hacia las áreas de
                                derecho comercial, bancario, financiero y fiduciario.
                                He prestado asesoría en contratos de concesión celebrados
                                bajo Asociaciones Público Privadas. También he sido asesor
                                en Contratos de Concesión bajo modalidad “4G”, y actualmente
                                me desempeño como Amigable Componedor en varias Concesiones de
                                Infraestructura Vial. Por último, cabe resaltar que fui profesor
                                Emérito (2016) de la Universidad Externado de Colombia, de la cual
                                también fui Secretario General entre 1996 y 2009.
                            </p>
                            <Button variant="success">Descargar CV</Button>
                        </div>

                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <div className="p-2" style={{background: "#C1E5C0", width: "460px"}}>
                            <h2 className="text-white">Experiencia</h2>
                            <ul>
                                <li>Abogado interno de Citibank Colombia.</li>
                                <li>Vicepresidente Jurídico y Secretario General del Banco Colpatria.</li>
                                <li>Abogado litigante y consultor en Derecho Privado y Financiero desde 1994.</li>
                                <li>Árbitro de las Cámaras de Comercio de Bogotá y Medellín.</li>
                                <li>Miembro de los Tribunales Disciplinarios de las Bolsas de Valores de Bogotá, año 2000 - 2006.</li>
                                <li>Miembro del Autorregulador del Mercado de Valores AMV, hasta la fecha.</li>
                                <li>Conjuez de la Corte Constitucional de 2007 al 2009.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutMeSection;