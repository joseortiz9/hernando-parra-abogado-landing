import React from "react";
import {ContainerWrapper, BgSquareShape, LogoDescription} from "./styles";
import TitleShadowed from "../../common/title-shadowed";
import {Col, Row, Image} from "react-bootstrap";
import DialogsImg from "../../assets/figures/principles/dialogs.svg";
import LoveImg from "../../assets/figures/principles/love.svg";
import SocialCareImg from "../../assets/figures/principles/social-care.svg";

const PrinciplesValuesSection = () => {
    return(
        <section id="principles-values" className="position-relative">
            <BgSquareShape />
            <ContainerWrapper className="text-center py-5 overflow-hidden">
                <TitleShadowed text="Principios y valores" className="my-5" translateX={-120} translateY={-60} />
                <p className="lead text-justify">
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
                            <Image src={SocialCareImg} />
                            <LogoDescription>Respeto hacia la comunidad</LogoDescription>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className="d-flex flex-column align-items-center">
                            <Image src={DialogsImg} />
                            <LogoDescription>Apertura al diálogo</LogoDescription>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className="d-flex flex-column align-items-center">
                            <Image src={LoveImg} />
                            <LogoDescription>Encuentro humano</LogoDescription>
                        </div>
                    </Col>
                </Row>
            </ContainerWrapper>
        </section>
    );
};

export default PrinciplesValuesSection;