import React from "react";
import {Container} from "react-bootstrap";
import DialogsImg from "../../assets/figures/principles/dialogs.svg";
import {ReactComponent as MailIcon} from "../../assets/figures/mail-icon.svg";
import {DialogImgWrapper, SubtitleWrapper, TitleWrapper} from "./styles";

const ContactUsSection = () => {
    return(
        <section>
            <Container>
                <div className="d-flex justify-content-center align-items-center">
                    <DialogImgWrapper src={DialogsImg} className="mr-3 mr-sm-5" />
                    <div className="d-flex flex-wrap">
                        <TitleWrapper>Queremos escucharte ¡Envíanos tus propuestas!</TitleWrapper>
                        <SubtitleWrapper className="mt-sm-2">
                            <a href="mailto:hernandoparra@externado2027.com">
                                <MailIcon /> hernandoparra@externado2027.com
                            </a>
                        </SubtitleWrapper>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactUsSection;