import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import TitleShadowed from "../../common/title-shadowed";
import PlanPdf from "../../assets/documents/management-plan-final.pdf";
import PlanImg from  "../../assets/management-plan-final.png";
import Objective1Img from "../../assets/figures/principles/objetivo1.svg";
import Objective2Img from "../../assets/figures/principles/objetivo2.svg";
import Objective3Img from "../../assets/figures/principles/objetivo3.svg";
import Objective4Img from "../../assets/figures/principles/objetivo4.svg";
import DefaultButton from "../../common/default-button";
import {ReactComponent as DownloadLogo} from "../../assets/figures/download_icon.svg";
import {PlanImgWrapper, SectionWrapper} from "./styles";
import {Fade} from "react-awesome-reveal";
import PlanFeatureWrapper from "../../common/plan-feature";

const ManagementPlanSection = () => {
    return(
        <SectionWrapper id="management-plan" className="overflow-hidden">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="position-relative" style={{maxWidth: "500px"}}>
                            <Fade direction="left" cascade damping={0.1}>
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
                                    Conoce nuestro programa
                                </DefaultButton>
                            </Fade>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Fade direction="right" damping={0.1}>
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

                <div className="mt-5">
                    <Fade direction="left" cascade damping={0.1}>
                        <PlanFeatureWrapper
                            title="Recuperar la importancia del capital humano como mayor activo y eje de la universidad"
                            logo={Objective1Img} index="1" indexColor="#77BC1F">
                            <p className="lead">
                                Recuperaremos la mística y el valor de cada integrante de la comunidad
                                externadista, de nuestros estudiantes, docentes y del personal administrativo.
                                Vamos a revitalizar el recurso humano para favorecer la libre expresión, sin
                                exclusiones por expresar las propias ideas, de manera que podamos construir un
                                Externado donde todos seamos protagonistas.
                            </p>
                        </PlanFeatureWrapper>
                        <PlanFeatureWrapper
                            title='Construir nuestra visión estratégica, el “Proyecto externadista”, y adoptar un modelo de gestión basado en la planificación participativa '
                            logo={Objective2Img} index="2" indexColor="#04B015">
                            <p className="lead">
                                Definiremos una bitácora para los próximos seis años, que siente las bases para las
                                décadas venideras, mediante un proceso riguroso de planificación estratégica que
                                realizaremos en forma deliberativa buscando el consenso con toda la comunidad externadista.
                                Para definir nuestro rumbo, nos propondremos trabajar siempre en equipo.
                            </p>
                        </PlanFeatureWrapper>
                        <PlanFeatureWrapper
                            title="Aprovechar plenamente el inmenso potencial de la Universidad. "
                            logo={Objective3Img} index="3" indexColor="#7AFFBB">
                            <p className="lead">
                                Trabajaremos para asegurar de nuevo su condición de institución ejemplar, faro de la
                                formación y la generación de conocimiento para la transformación del país y la región.
                            </p>
                        </PlanFeatureWrapper>
                        <PlanFeatureWrapper
                            title="Transformar el modelo de gestión de la Universidad haciendo de la democracia, la participación y la transparencia los pilares fundamentales."
                            logo={Objective4Img} index="4" indexColor="#C9E4A5">
                            <p className="lead">
                                La toma de decisiones debe ser eficiente y participativa. Por ello, es necesario
                                fortalecer y definir las competencias de las instancias que participan en la vida
                                universitaria.
                            </p>
                        </PlanFeatureWrapper>
                    </Fade>
                </div>
            </Container>
        </SectionWrapper>
    );
};

export default ManagementPlanSection;