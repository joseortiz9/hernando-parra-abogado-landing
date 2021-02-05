import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import TitleShadowed from "../../common/title-shadowed";
import PlanPdf from "../../assets/documents/management-plan-final.pdf";
import PlanImg from  "../../assets/management-plan-final.png";
import DefaultButton from "../../common/default-button";
import {ReactComponent as DownloadLogo} from "../../assets/figures/download_icon.svg";
import {PlanImgWrapper} from "./styles";

const ManagementPlanSection = () => {
    return(
        <section id="management-plan" className="overflow-hidden mt-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="position-relative" style={{maxWidth: "500px"}}>
                            <TitleShadowed text="Plan de gestión universitaria" className="my-5" translateX={-30} translateY={-60} />
                            <p className="lead">
                                Comprometido con la defensa de estos principios, y en el marco de una
                                acción que garantice la sostenibilidad financiera, ambiental y la inclusión
                                social, expongo a continuación los cuatro objetivos estratégicos y las
                                respectivas estrategias que articulan el plan de desarrollo y de gestión
                                universitaria 2021-2027. Este documento fue el resultado de un proceso de
                                diálogo y conciliación con los profesores y estudiantes de la universidad.
                            </p>
                            <DefaultButton href={PlanPdf} target="_blank" className="btn-success py-3 py-md-2 px-3 mt-3 mb-0 mb-md-3">
                                <DownloadLogo stroke="white" className="mr-1" />
                                Descargar Plan
                            </DefaultButton>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pl-md-5 w-100 h-100">
                            <PlanImgWrapper className="shadow rounded overflow-hidden w-100 h-100 mt-5 mt-md-0">
                                <a href={PlanPdf} target="_blank" rel="noreferrer">
                                    <Image className="" src={PlanImg} fluid />
                                </a>
                            </PlanImgWrapper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ManagementPlanSection;