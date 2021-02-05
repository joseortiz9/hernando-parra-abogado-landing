import React from "react";
import * as S from "./styles";
import TitleShadowed from "../../common/title-shadowed";
import {Col, Image} from "react-bootstrap";
import DialogsImg from "../../assets/figures/principles/dialogs.svg";
import LoveImg from "../../assets/figures/principles/love.svg";
import SocialCareImg from "../../assets/figures/principles/social-care.svg";
import {Fade} from "react-awesome-reveal";

const PrinciplesValuesSection = () => {
    return(
        <section id="principles-values" className="position-relative">
            <S.BgSquareShape />
            <S.ContainerWrapper className="text-center py-5 position-relative overflow-hidden">
                <S.DotsDarkGreenShapeLeftWrapper />
                <S.DotsDarkGreenShapeRightWrapper />
                <Fade cascade>
                    <TitleShadowed text="Principios y valores" className="my-5" translateX={-120} translateY={-60} />
                    <p className="lead text-justify">
                        Hoy quiero ser Rector del Externado porque tengo una visión amplia y orientada
                        al futuro de nuestra universidad, que propongo hacer realidad de la mano de la
                        comunidad externadista.  El programa de desarrollo y gestión universitaria que
                        propongo se denomina <b>“Externado 2027: volvernos a encontrar”</b>. Aquí les presento
                        los principios de una rectoría abierta y comprometida con cada miembro de la comunidad
                        externadista, así como los objetivos estratégicos y las estrategias que orientarán nuestra gestión.
                    </p>
                    <p className="lead text-justify">
                        Los principios y valores que inspirarán a nuestra rectoría serán el respeto y
                        el reconocimiento profundo a cada miembro de la comunidad universitaria, la
                        apertura constante al diálogo sin jerarquías absolutas, la creación de espacios
                        de encuentro humano, profesional, honesto y comprometido con nuestra casa de estudios.
                        Nos empeñaremos en la defensa de la libertad de pensamiento, de expresión y de
                        cátedra conforme a la tradición externadista. Transparencia, deliberación respetuosa y
                        participación democrática serán ejes de la gestión rectoral.
                    </p>
                    <S.FeaturesRowWrapper className="mt-4 mt-sm-5">
                        <Col xs={12} sm={4} className="mb-5 mb-sm-0">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-end">
                                <Image src={SocialCareImg} className="mb-3" />
                                <S.LogoDescription>Respeto hacia la comunidad</S.LogoDescription>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="mb-5 mb-sm-0">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-end">
                                <Image src={DialogsImg} className="mb-3" />
                                <S.LogoDescription>Apertura al diálogo</S.LogoDescription>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-end">
                                <Image src={LoveImg} className="mb-3" />
                                <S.LogoDescription>Encuentro humano</S.LogoDescription>
                            </div>
                        </Col>
                    </S.FeaturesRowWrapper>
                </Fade>
            </S.ContainerWrapper>
        </section>
    );
};

export default PrinciplesValuesSection;