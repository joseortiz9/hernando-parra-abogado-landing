import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import TitleShadowed from "../../common/title-shadowed";
import PlanPdf from "../../assets/documents/management-plan-final.pdf";
import PlanImg from  "../../assets/management-plan-final.png";
import DefaultButton from "../../common/default-button";
import {ReactComponent as DownloadLogo} from "../../assets/figures/download_icon.svg";
import {PlanImgWrapper, SectionWrapper} from "./styles";
import {Fade} from "react-awesome-reveal";

const ManagementPlanSection = () => {
    return(
        <SectionWrapper id="management-plan" className="overflow-hidden">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="position-relative" style={{maxWidth: "500px"}}>
                            <Fade direction="left" cascade>
                                <TitleShadowed text="Plan de gestión universitaria" className="my-5" translateX={-30} translateY={-60} />
                                <p className="lead">
                                    Comprometido con la defensa de estos principios, y en el marco de una acción
                                    que garantice <b>la inclusión social, la sostenibilidad ambiental y financiera</b>,
                                    expongo a continuación los cuatro objetivos estratégicos que articulan el
                                    Plan de desarrollo y de gestión universitaria 2021-2027. Este documento
                                    fue el resultado de un proceso de comunicación
                                    con <b>estudiantes y docentes de la universidad</b>.
                                </p>
                                <DefaultButton href={PlanPdf} target="_blank" className="btn-success py-3 py-md-2 px-3 mt-3 mb-0 mb-md-3">
                                    <DownloadLogo stroke="white" className="mr-1" />
                                    Descargar Plan
                                </DefaultButton>
                            </Fade>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Fade direction="right">
                            <div className="pl-md-5 w-100 h-100">
                                <PlanImgWrapper className="shadow rounded overflow-hidden w-100 h-100 mt-5 mt-md-0">
                                    <a href={PlanPdf} target="_blank" rel="noreferrer">
                                        <Image className="" src={PlanImg} fluid />
                                    </a>
                                </PlanImgWrapper>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </SectionWrapper>
    );
};

export default ManagementPlanSection;