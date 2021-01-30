import styled from "styled-components";
import {ITitleShadowedProps} from "./index";

const TitleShadowedWrapper = styled.h1`
    font-weight: 700;
    font-size: 72px;
    &::before {
        opacity: 0.3;
        content: "${(p:ITitleShadowedProps) => p.text}";
        position: absolute;
        color: #00F076;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #00F076;
        font-size: 100px;
        transform: ${(p:ITitleShadowedProps) => "translate("+p.translateX+"px, "+p.translateY+"px)"};
        line-height: 85px;
        z-index: -1;
    }
`;

export {TitleShadowedWrapper};