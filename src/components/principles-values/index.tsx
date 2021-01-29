import React from "react";
import {ContainerWrapper, BgSquareShape} from "./styles";
import TitleShadowed from "../../common/title-shadowed";
import {Col, Row} from "react-bootstrap";

const PrinciplesValuesSection = () => {
    return(
        <section id="principles-values" className="position-relative">
            <BgSquareShape />
            <ContainerWrapper className="text-center">
                <TitleShadowed text="Principios y valores" className="mt-5 mb-3" translateX={-40} translateY={-60} />
                <p className="lead">
                    Los principios y valores que inspirarán a nuestra rectoría serán el respeto y el
                    reconocimiento profundo a cada miembro de la comunidad universitaria, la apertura
                    constante al diálogo sin jerarquías absolutas, la creación de espacios de encuentro humano,
                    profesional, honesto y comprometido con nuestra casa de estudios.  Nos empeñaremos en la
                    defensa de la libertad de pensamiento, de expresión y de cátedra conforme a la tradición
                    externadista. Transparencia, deliberación respetuosa y participación democrática serán ejes
                    de la gestión rectoral.
                </p>
                <Row>
                    <Col xs>

                    </Col>
                </Row>
            </ContainerWrapper>
        </section>
    );
};

export default PrinciplesValuesSection;