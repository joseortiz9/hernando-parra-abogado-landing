import React from "react";
import {TitleShadowedWrapper} from "./styles";

export interface ITitleShadowedProps {
    text: string
    translateX: number
    translateY: number
    className?: string
}

const TitleShadowed = ({text, translateX, translateY, className}: ITitleShadowedProps) => {
    return(
        <TitleShadowedWrapper text={text} translateX={translateX} translateY={translateY} className={className}>
            {text}
        </TitleShadowedWrapper>
    );
};

export default TitleShadowed;