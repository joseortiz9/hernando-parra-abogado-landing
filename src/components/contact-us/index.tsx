import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import DialogsImg from "../../assets/figures/principles/dialogs.svg";
import {ReactComponent as MailIcon} from "../../assets/figures/mail-icon.svg";
import {DialogImgWrapper, SubtitleWrapper, TitleWrapper, LimitWidthWrapper} from "./styles";
import {Fade} from "react-awesome-reveal";
import {Timeline} from "react-twitter-widgets";

const ContactUsSection = () => {
    return(
        <section>
            <Container>
                <Fade damping={0.1}>
                    <div className="d-flex justify-content-md-center">
                    <LimitWidthWrapper className="d-flex flex-md-column align-items-md-center justify-content-md-center">
                        <DialogImgWrapper src={DialogsImg} className="mr-3 mr-sm-5" />
                        <div className="d-flex flex-wrap justify-content-md-center">
                            <TitleWrapper>Queremos escucharte ¡Envíanos tus propuestas!</TitleWrapper>
                            <SubtitleWrapper className="mt-sm-2">
                                <a href="mailto:hernandoparra@externado2027.com">
                                    <MailIcon /> hernandoparra@externado2027.com
                                </a>
                            </SubtitleWrapper>
                        </div>
                    </LimitWidthWrapper>
                    </div>
                </Fade>
                {(window.innerWidth > 768) &&
                <Row className="d-none d-md-flex mt-5">
                    <Col xs={4}>
                        <span className="font-weight-bold">Es imposible insertar perfiles usuales de facebook debido a las politicas de privacidad, debe ser una pagina o grupo publico, por eso el plugin si funcionaba antes</span>
                        {/*<iframe*/}
                        {/*    title="hernando-facebook-plugin"*/}
                        {/*    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhernando.parranieto%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2275317369278852"*/}
                        {/*    width="100%" height="600" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"*/}
                        {/*    onError={() => "Error loading the facebook frame, seems the page was deleted or is down."}*/}
                        {/*    allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>*/}
                    </Col>
                    <Col xs={4}>
                        <iframe
                            title="hernando-instagram-plugin"
                            src="https://www.instagram.com/p/CLAbwymJxuu/embed"
                            width="100%" height="100%" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                            onError={() => "Error loading the instagram frame, seems the page was deleted or is down."}
                            allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
                    </Col>
                    <Col xs={4}>
                        <Timeline
                            dataSource={{ sourceType: "profile", screenName: "hernandoparran" }}
                            renderError={() => "Error Loading the twitter feed, please reload the page."}
                            options={{ height: "600" }}
                        />
                    </Col>
                </Row>
                }
            </Container>
        </section>
    );
};

export default ContactUsSection;