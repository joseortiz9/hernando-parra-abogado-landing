import React, {ReactNode} from "react";
import {ButtonWrapper} from "./styles";

interface IDefaultButtonProps {
    className: string
    children: ReactNode
    onClick: () => void
}

const DefaultButton = ({className, children, onClick}: IDefaultButtonProps) => {
    return(
        <ButtonWrapper className={className} onClick={onClick}>{children}</ButtonWrapper>
    );
};

export default DefaultButton;