import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import UniversityImg from "../../assets/university.png";
import {BgSquareShape, ImgShadowWrapper, WidthLimiterWrapper} from "./styles";
import TitleShadowed from "../../common/title-shadowed";

const TimeToChangeSection = () => {
    return (
        <section id="time-to-change" className="overflow-hidden">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <WidthLimiterWrapper>
                            <TitleShadowed text="Hora del cambio" className="mb-3" translateX={-90} translateY={-60} />
                            <p className="lead">
                                La <b>Universidad Externado</b> ha llegado a un momento clave de su historia.
                                Un punto de inflexión en el que debe volver en sí misma para construir
                                su futuro de manera <b>conjunta y colectiva</b>, recuperar la importancia de su
                                capital humano, aprovechar plenamente su potencial institucional, construir
                                su visión estratégica y adoptar un modelo de gestión basado en la
                                <b> planificación participativa</b>, pensar su gobernanza y democratizarse
                                de forma coherente con el proyecto externadista.
                            </p>
                        </WidthLimiterWrapper>
                    </Col>
                    <Col xs={12} md={6}>
                        <WidthLimiterWrapper>
                            <BgSquareShape />
                            <ImgShadowWrapper>
                                <Image src={UniversityImg} alt="university-banner" fluid />
                            </ImgShadowWrapper>
                        </WidthLimiterWrapper>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default TimeToChangeSection;