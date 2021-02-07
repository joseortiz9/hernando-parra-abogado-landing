import styled from "styled-components";
import {Container} from "react-bootstrap";
import {ReactComponent as DotsDarkGreenShape} from "../../assets/figures/dots-dark-green-about-us-sec.svg";

const ContainerWrapper = styled(Container)`
  background: #FFFFFF;
  border: 1px solid rgba(1, 81, 44, 0.1);
  z-index: 100;
  position: relative;
  padding-left: 5rem;
  padding-right: 5rem;
  @media screen and (max-width: 767px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (min-width: 319px) and (max-width: 430px) {
    max-width: 320px;
  }
  @media screen and (min-width: 430px) and (max-width: 576px) {
    max-width: 420px;
  }
`;

const OverFlowWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
`;

const BgSquareShape = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  left: 0;
  right: 0;
  top: 45%;
  background: #EBFFEB;
  z-index: 50;
  @media screen and (max-width: 575px) {
      height: 62%;
  }
`;

const FeaturesWrapper = styled.div`
`;

const DotsDarkGreenShapeLeftWrapper = styled(DotsDarkGreenShape)`
  width: 130px;
  height: 130px;
  position: absolute;
  bottom: 5px;
  left: -80px;
  color: #01512C;
  z-index: -1;
`;

const DotsDarkGreenShapeRightWrapper = styled(DotsDarkGreenShape)`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -100px;
  right: -100px;
  color: #01512C;
  z-index: -1;
`;

export {ContainerWrapper, BgSquareShape, DotsDarkGreenShapeLeftWrapper, DotsDarkGreenShapeRightWrapper, OverFlowWrapper, FeaturesWrapper};