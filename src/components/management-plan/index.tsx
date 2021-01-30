import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import TitleShadowed from "../../common/title-shadowed";
import CvPdf from "../../assets/cv-test.pdf";
import DefaultButton from "../../common/default-button";
import {ReactComponent as DownloadLogo} from "../../assets/figures/download_icon.svg";

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
                            <a href={CvPdf} target="_blank" rel="noreferrer">
                                <DefaultButton onClick={() => {}} className="btn-success py-2 px-3 mt-3">
                                    <DownloadLogo stroke="white" className="mr-1" />
                                    Descargar Plan
                                </DefaultButton>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-none d-md-flex">
                        <Image className="pl-5" src="https://via.placeholder.com/500" fluid />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ManagementPlanSection;