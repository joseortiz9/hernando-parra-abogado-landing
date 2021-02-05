import styled from "styled-components";
import {Container} from "react-bootstrap";
import {ReactComponent as DotsLightGreenShape} from "../../assets/figures/dots-light-green-banner.svg";
import {ReactComponent as DotsDarkGreenShape} from "../../assets/figures/dots-dark-green-about-us-sec.svg";

const AboutMeSectionWrapper = styled.section`
overflow: hidden;
`;

const ContainerWrapper = styled(Container)`
  position: relative;
  z-index: 100;
`;

const WidthLimiterWrapper= styled.div`
  max-width: 500px;
`;

const ImgShadowWrapper = styled.div`
  position: relative;
  background: #01A85B;
  img {
    transform: translate(-12px, -14px);
  }
`;

const DotsLightGreenShapeWrapper = styled(DotsLightGreenShape)`
  width: 220px;
  height: 220px;
  position: absolute;
  right: -18%;
  top: -5%;
  @media screen and (max-width: 767px) {
    width: 180px;
    height: 180px;
    top: 0;
    right: -30%;
  }
`;

const DotsLightGreenShapeRotatedWrapper = styled(DotsDarkGreenShape)`
  width: 220px;
  height: 220px;
  position: absolute;
  bottom: -70px;
  left: -100px;
  color: #01512C;
  z-index: -1;
`;

export {ImgShadowWrapper, WidthLimiterWrapper, AboutMeSectionWrapper, ContainerWrapper, DotsLightGreenShapeWrapper, DotsLightGreenShapeRotatedWrapper};