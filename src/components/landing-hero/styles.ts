import styled from "styled-components";

const LandingHeroWrapper = styled.section`
  height: 70vh;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    height: 100vh;
  }
`;

const BannerSquareShape = styled.div`
  height: calc(100% + 40px);
  width: 45%;//calc(100% - 700px);
  border-radius: 30% 0 0 30% / 50% 10% 10% 50%;
  position: absolute;
  bottom: -20px;
  top: -20px;
  right: 0;
  background: #023324;
  background: linear-gradient(180.23deg, #023324 -10.29%, #026939 102.32%);
  z-index: -1;
  @media screen and (max-width: 767px) {
    width: calc(100% + 40px);
    height: 190px;
    top: auto;
    bottom: 0;
    left: -20px;
    right: -20px;
    border-radius: 50% 50% 0 0 / 50% 50% 10% 50%;
  }
`;

const LandingGuyWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 42%;
  img {
    width: 400px;
  }
  @media screen and (min-width: 1440px) {
    left: 50%;
  }
  @media screen and (max-width: 767px) {
    left: 40%;
    img {
      width: 300px;
    }
  }
`;

const ScrollDownLabel = styled.span`
  position: absolute;
  color: white;
  font-size: 13px;
  bottom: 80px;
  right: 30px;
  transform: rotate(90deg);
`;

const FeatureWrapper = styled.div`
  * {
    max-width: 40%;
  }
  h1 {
    color: #01512C;
    font-size: 60px;
  }
  .subtitle {
    color: #0B252A;
    font-size: 40px;
  }
  @media screen and (max-width: 767px) {
  * {
    max-width: 60%;
  }
  h1 {
    font-size: 40px;
  }
  .subtitle {
    font-size: 28px;
  }
  }
`;

export {LandingHeroWrapper, BannerSquareShape, LandingGuyWrapper, FeatureWrapper, ScrollDownLabel};