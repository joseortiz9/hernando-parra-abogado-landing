import React, {useState} from "react";
import {ColumnWrapper,ModalWrapper} from "./styles";
import {Image, Card, Modal} from "react-bootstrap";
import {ReactComponent as CalendarSvg} from "../../assets/figures/columns/calendar.svg";
import ParraLogo from "../../assets/column_author_parra.png";
import DefaultButton from "../default-button";

const Column = ({logoAuthor, author, intro, title, subtitle, date, content}: IColumnProps) => {
    const logo = !logoAuthor ? ParraLogo : "";
    const [showModal, setShowModal] = useState(false);
    return(
        <>
            <ColumnWrapper className="rounded">
                <Card.Body>
                    <div className="d-flex mb-3">
                        <Image src={logo} className="mr-3" roundedCircle />
                        <div className="d-flex flex-column justify-content-center text-muted">
                            <span>Por: {author}</span>
                            <span><CalendarSvg /> {date}</span>
                        </div>
                    </div>
                    <h1>{title}</h1>
                    <p className="lead mt-3">{intro}</p>
                    <DefaultButton className="btn-success py-3 py-md-2 px-3 mt-3" onClick={() => setShowModal(true)}>
                        Leer más
                    </DefaultButton>
                </Card.Body>
            </ColumnWrapper>

            <ModalWrapper show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <div className="d-flex align-items-center">
                        <Image src={logo} className="mr-2" roundedCircle />
                        <div className="d-flex flex-column">
                            <span>Por: {author}</span>
                            <span>Profesor emérito de la Universidad Externado de Colombia.</span>
                            <span><CalendarSvg /> {date}</span>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <h1 className="text-center">{title}</h1>
                    <p className="lead italic-subtitle mb-4">{intro}</p>
                    <p className="lead">{content}</p>
                </Modal.Body>
            </ModalWrapper>
        </>
    );
};

export default Column;