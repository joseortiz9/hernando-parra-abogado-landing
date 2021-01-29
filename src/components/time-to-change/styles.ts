import styled from "styled-components";

const WidthLimiterWrapper= styled.div`
  max-width: 500px;
  position: relative;
`;

const BgSquareShape = styled.div`
  background: #C1E5C0;
  position: absolute;
  width: calc(100% - 130px);
  height: calc(100% - 50px);
  top: -60px;
  right: -70px;
  z-index: -1;
`;

const ImgShadowWrapper = styled.div`
    background: white;
    padding: 10px 10px 0 0;
`;

export {ImgShadowWrapper, WidthLimiterWrapper, BgSquareShape};