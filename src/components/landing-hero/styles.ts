import styled from "styled-components";
import { ReactComponent as GreenCircleShape } from "../../assets/figures/green-cirlce-fig.svg";
import { ReactComponent as WhiteCircleShape } from "../../assets/figures/white-cirlce-fig.svg";
import { ReactComponent as DotsLightGreenShape } from "../../assets/figures/dots-light-green-banner.svg";
import { ReactComponent as DotsDarkGreenShape } from "../../assets/figures/dots-dark-green-banner.svg";

const LandingHeroWrapper = styled.section`
  height: 70vh;
  position: relative;
  @media screen and (max-width: 767px) {
    height: 80vh;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 0;
  @media screen and (max-width: 767px) {
    padding-top: 7rem;
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
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    left: 45%;
    img {
      width: 460px;
    }
  }
  @media screen and (max-width: 767px) {
    left: 40%;
    img {
      width: 340px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    left: 30%;
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

const QuoteShapeWrapper = styled.div`
  width: 270px;
  position: absolute;
  right: 15%;
  top: 25%;
  font-family: OpenSansItalic, serif, Arial;
  font-size: 24px;
  line-height: 28px;
  color: white;
  text-align: center;
  div {
    position: relative;
    svg {
      position: absolute;
      &:first-child {
        transform: scaleX(-1);
        bottom: 50%;
        left: -6px;
      }
      &:last-child {
        right: 4px;
        bottom: -10px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    right: 5%;
  }
  @media screen and (max-width: 767px) {
    font-size: 21px;
    bottom: 8%;
    left: 10%;
    right: auto;
    top: auto;
  }
  @media screen and (max-width: 575px) {
    font-size: 19px;
    width: 200px;
    left: 5%;
  }
`;

const GreenCircleShapeWrapper = styled(GreenCircleShape)`
  position: absolute;
  left: -30px;
  top: 5%;
`;

const WhiteCircleShapeWrapper = styled(WhiteCircleShape)`
  position: absolute;
  right: -5px;
  bottom: 17%;
  @media screen and (max-width: 767px) {
    width: 300px;
    height: 300px;
    bottom: auto;
    top: 20%;
    right: -15px;
  }
`;

const DotsLightGreenShapeWrapper = styled(DotsLightGreenShape)`
  position: absolute;
  right: 5px;
  bottom: 38%;
  @media screen and (max-width: 767px) {
    width: 150px;
    height: 150px;
    bottom: auto;
    top: 18%;
    right: 110px;
  }
`;

const DotsLightGreenShapeRotatedWrapper = styled(DotsLightGreenShape)`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 45%;
  top: 15%;
  transform: rotate(45deg);
  @media screen and (min-width: 1440px) {
    left: 50%;
  }
  @media screen and (max-width: 767px) {
    top: 45%;
    right: 110px;
  }
`;

const DotsDarkGreenShapeWrapper = styled(DotsDarkGreenShape)`
  position: absolute;
  bottom: -40px;
  left: 17%;
  @media screen and (min-width: 1440px) {
    left: 30%;
  }
`;

export {
    LandingHeroWrapper,
    BannerSquareShape,
    LandingGuyWrapper,
    FeatureWrapper,
    ScrollDownLabel,
    GreenCircleShapeWrapper,
    WhiteCircleShapeWrapper,
    DotsLightGreenShapeWrapper,
    DotsDarkGreenShapeWrapper,
    DotsLightGreenShapeRotatedWrapper,
    QuoteShapeWrapper,
    ContentWrapper
};