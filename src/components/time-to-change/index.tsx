import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import UniversityImg from "../../assets/university.png";
import {BgSquareShape, ImgShadowWrapper, WidthLimiterWrapper} from "./styles";
import TitleShadowed from "../../common/title-shadowed";
import {Fade} from "react-awesome-reveal";

const TimeToChangeSection = () => {
    return (
        <section id="time-to-change" className="overflow-hidden">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <WidthLimiterWrapper>
                            <Fade direction="left" delay={300} cascade damping={0.1}>
                                <TitleShadowed text="Hora del cambio" className="mb-3" translateX={-90} translateY={-60} />
                                <p className="lead">
                                    Nuestro <b>Externado</b> ha llegado a un momento de su historia que, sin duda,
                                    definirá su futuro. Un momento de transformación que inició con la renovación
                                    de nuestro Consejo Directivo. Es la hora de unirnos todos —estudiantes;
                                    profesores y profesoras; funcionarios y funcionarias, egresados y egresadas— en
                                    torno a la construcción de la universidad que anhelamos:
                                    <b>participativa, tolerante y de excelencia académica,</b> en la cual todos podamos
                                    aportar a su consolidación.
                                </p>
                            </Fade>
                        </WidthLimiterWrapper>
                    </Col>
                    <Col xs={12} md={6}>
                        <WidthLimiterWrapper>
                            <BgSquareShape />
                            <ImgShadowWrapper>
                                <Fade direction="right" delay={300} damping={0.1}>
                                    <Image src={UniversityImg} alt="university-banner" fluid />
                                </Fade>
                            </ImgShadowWrapper>
                        </WidthLimiterWrapper>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default TimeToChangeSection;