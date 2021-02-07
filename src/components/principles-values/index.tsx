import React from "react";
import * as S from "./styles";
import TitleShadowed from "../../common/title-shadowed";
import DialogsImg from "../../assets/figures/principles/dialogs.svg";
import LoveImg from "../../assets/figures/principles/love.svg";
import SocialCareImg from "../../assets/figures/principles/social-care.svg";
import {Fade} from "react-awesome-reveal";
import PrincipleFeatureWrapper from "../../common/principle-feature";

const PrinciplesValuesSection = () => {
    return(
        <section id="principles-values" className="position-relative">
            <S.BgSquareShape />
            <S.ContainerWrapper className="text-center py-5 position-relative overflow-hidden">
                <S.DotsDarkGreenShapeLeftWrapper />
                <S.DotsDarkGreenShapeRightWrapper />
                <Fade cascade damping={0.1}>
                    <TitleShadowed text="Principios y valores" className="my-5" translateX={-120} translateY={-60} />
                    <p className="lead text-justify">
                        Hoy quiero ser Rector del <b>Externado</b> porque tengo una visión amplia y orientada
                        al futuro de nuestra universidad, que propongo hacer realidad de la mano de la
                        comunidad externadista.  El programa de desarrollo y gestión universitaria que
                        propongo se denomina <b>“Externado 2027: volvernos a encontrar”</b>. Aquí les presento
                        los principios de una <b>rectoría abierta y comprometida</b> con cada miembro de la comunidad
                        externadista, así como los objetivos estratégicos y las estrategias que orientarán nuestra gestión.
                    </p>
                    <S.FeaturesWrapper className="mt-5">
                        <PrincipleFeatureWrapper logo={SocialCareImg} title="Respeto hacia la comunidad">
                            <p className="lead">
                                Este valor se materializa mediante el <b>reconocimiento</b> de cada estudiante,
                                profesor o profesora, funcionario o funcionaria y egresado o egresada de
                                la comunidad universitaria, sus necesidades y puntos de vista. Serán ejes
                                de la gestión rectoral la <b>transparencia, deliberación respetuosa,
                                participación democrática y las políticas con enfoque de género</b>.
                            </p>
                        </PrincipleFeatureWrapper>
                        <PrincipleFeatureWrapper logo={DialogsImg} title="Apertura al diálogo">
                            <p className="lead">
                                Esto significa la <b>eliminación de jerarquías absolutas</b> y la protección
                                irrestricta de la <b>libertad de expresión</b> en la comunidad universitaria.
                                Nos empeñaremos en la defensa de la libertad de pensamiento y de
                                cátedra conforme a la tradición externadista.
                            </p>
                        </PrincipleFeatureWrapper>
                        <PrincipleFeatureWrapper logo={LoveImg} title="Encuentro humano">
                            <p className="lead">
                                En esto se traduce nuestro slogan "<b>volvernos a encontrar</b>"
                                que va más allá de un encuentro físico; es un encuentro anhelado
                                por todos y sobre todo esperanzador, caracterizado por la tolerancia
                                entre los miembros.
                            </p>
                        </PrincipleFeatureWrapper>
                    </S.FeaturesWrapper>
                </Fade>
            </S.ContainerWrapper>
        </section>
    );
};

export default PrinciplesValuesSection;