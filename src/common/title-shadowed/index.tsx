import React from "react";
import {TitleShadowedWrapper} from "./styles";

export interface ITitleShadowedProps {
    text: string
    translateX: number
    translateY: number
    className?: string
    title?: string
}

const TitleShadowed = ({title, text, translateX, translateY, className}: ITitleShadowedProps) => {
    return(
        <TitleShadowedWrapper text={text} translateX={translateX} translateY={translateY} className={className}>
            {title ? title : text}
        </TitleShadowedWrapper>
    );
};

export default TitleShadowed;