import styled from "styled-components";

const WidthLimiterWrapper= styled.div`
  max-width: 500px;
`;

const ImgShadowWrapper = styled.div`
    background: #01A85B;
    img {
      transform: translate(-12px, -14px);
    }
`;

const TitleShadowed = styled.h1`
    font-weight: 700;
    font-size: 72px;
    &::before {
        content: "Sobre mí";
        position: absolute;
        color: #00F076;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #00F076;
        font-size: 100px;
        transform: translate(-120px, -50px);
        z-index: -1;
    }
`;

export {ImgShadowWrapper, TitleShadowed, WidthLimiterWrapper};