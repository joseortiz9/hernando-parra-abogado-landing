import styled from "styled-components";
import {Container} from "react-bootstrap";

const ContainerWrapper = styled(Container)`
  background: #FFFFFF;
  border: 1px solid rgba(1, 81, 44, 0.1);
  z-index: 100;
  position: relative;
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
`;

const LogoDescription = styled.span`
  font-weight: bold;
  color: #01512C;
  font-size: 16px;
`;

export {ContainerWrapper, BgSquareShape, LogoDescription};