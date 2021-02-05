import styled from "styled-components";
import {Image} from "react-bootstrap";
import {darken} from "polished";

const TitleWrapper = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 67px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    line-height: 35px;
  }
  @media screen and (max-width: 575px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

const SubtitleWrapper = styled.h1`
  font-weight: 600;
  font-size: 35px;
  line-height: 28px;
  word-break: break-all;
  a {
  color: #01512C;
  &:hover {
      text-decoration: none;
      color: ${darken(0.05, "#01512C")};
  }
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
    svg {
      width: 30px;
    }
  }
  @media screen and (max-width: 575px) {
    font-size: 12px;
    line-height: 50px;
    svg {
      width: 22px;
    }
  }
`;

const DialogImgWrapper = styled(Image)`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 575px) {
    width: 80px;
    height: 80px;
  }
`;

export {TitleWrapper, SubtitleWrapper, DialogImgWrapper};