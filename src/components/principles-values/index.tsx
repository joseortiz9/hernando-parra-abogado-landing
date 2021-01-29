import React from "react";
import {ContainerWrapper, BgSquareShape} from "./styles";
import TitleShadowed from "../../common/title-shadowed";
import {Col, Row} from "react-bootstrap";
import {ReactComponent as DialogsImg} from "../../assets/figures/principles/dialogs.svg";
import {ReactComponent as LoveImg} from "../../assets/figures/principles/love.svg";
import {ReactComponent as SocialCareImg} from "../../assets/figures/principles/social-care.svg";

const PrinciplesValuesSection = () => {
    return(
        <section id="principles-values" className="position-relative">
            <BgSquareShape />
            <ContainerWrapper className="text-center py-5">
                <TitleShadowed text="Principios y valores" className="mt-5 mb-5" translateX={-120} translateY={-60} />
                <p className="lead">
                    Los principios y valores que inspirarán a nuestra rectoría serán el respeto y el
                    reconocimiento profundo a cada miembro de la comunidad universitaria, la apertura
                    constante al diálogo sin jerarquías absolutas, la creación de espacios de encuentro humano,
                    profesional, honesto y comprometido con nuestra casa de estudios.  Nos empeñaremos en la
                    defensa de la libertad de pensamiento, de expresión y de cátedra conforme a la tradición
                    externadista. Transparencia, deliberación respetuosa y participación democrática serán ejes
                    de la gestión rectoral.
                </p>
                <Row className="mt-5">
                    <Col xs={12} sm={4}>
                        <div className="d-flex flex-column align-items-center">
                            <DialogsImg />
                            <span className="lead font-weight-bold">Respeto hacia la comunidad</span>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className="d-flex flex-column align-items-center">
                            <LoveImg />
                            <span className="lead font-weight-bold">Apertura al diálogo</span>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className="d-flex flex-column align-items-center">
                            <SocialCareImg />
                            <span className="lead font-weight-bold">Encuentro humano</span>
                        </div>
                    </Col>
                </Row>
            </ContainerWrapper>
        </section>
    );
};

export default PrinciplesValuesSection;