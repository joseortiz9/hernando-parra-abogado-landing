import styled from "styled-components";
import {Container} from "react-bootstrap";

const AboutMeSectionWrapper = styled.section``;

const ContainerWrapper = styled(Container)`
  position: relative;
  z-index: 100;
`;

const WidthLimiterWrapper= styled.div`
  max-width: 500px;
`;

const ImgShadowWrapper = styled.div`
    background: #01A85B;
    img {
      transform: translate(-12px, -14px);
    }
`;

export {ImgShadowWrapper, WidthLimiterWrapper, AboutMeSectionWrapper, ContainerWrapper};