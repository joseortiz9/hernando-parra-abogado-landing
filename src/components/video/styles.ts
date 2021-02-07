import styled from "styled-components";

const SectionWrapper = styled.section`
  //background: #EBFFEB;
  h1 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    @media screen and (max-width: 576px) {
      font-size: 30px;
    }
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -45px;
  margin-top: -45px;
  * {
  width: 90px;
  height: 90px;
  }
  transition: all 0.5s ease;
  &:hover {
  transform: scale(1.3);
  }
  @media screen and (max-width: 300px) {
  margin-left: -25px;
  margin-top: -25px;
  * {
      width: 50px;
      height: 50px;
  }
  }
`;

export {VideoWrapper, PlayButtonWrapper, SectionWrapper};