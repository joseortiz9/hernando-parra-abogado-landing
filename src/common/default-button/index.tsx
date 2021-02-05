import React from "react";
import {ButtonWrapper} from "./styles";
import {ButtonProps} from "react-bootstrap";

const DefaultButton = ({className, children, onClick, href, target}: ButtonProps) => {
    return(
        <ButtonWrapper className={className} onClick={onClick} href={href} target={target}>{children}</ButtonWrapper>
    );
};

export default DefaultButton;