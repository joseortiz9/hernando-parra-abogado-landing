import styled from "styled-components";
import {Card, Image} from "react-bootstrap";

const FeatureWrapper = styled(Card)`
  margin-left: 90px;
  position: relative;
  padding: 25px 80px 30px 130px;
  @media screen and (max-width: 767px) {
    margin-top: 5.5rem;
    margin-left: 0;
    padding: 70px 16px 30px 16px;
  }
`;

const ImageWrapper = styled(Image)`
  width: 195px;
  height: 195px;
  position: absolute;
  top: 50%;
  margin-top: -98px;
  left: -100px;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
    top: 0;
    margin-top: -50px;
    left: 50%;
    margin-left: -50px;
  }
`;

const IndexWrapper = styled.span`
  font-family: MontserratBlack, sans-serif, Arial, Helvetica;
  font-size: 100px;
  line-height: 110px;
  @media screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 65px;
  }
`;

const TitleWrapper = styled.h1`
  font-size: 24px;
  line-height: 28px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export {FeatureWrapper, ImageWrapper, TitleWrapper, IndexWrapper};
