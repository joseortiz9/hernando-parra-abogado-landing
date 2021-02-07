import styled from "styled-components";
import {CloseButton} from "react-bootstrap";
import {darken} from "polished";

interface IOverlayNavbarProps {
    isOpen: boolean
}
const OverlayWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #0B252A;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: 0.5s;
  height: 100%;
  width: 100%;
  display: ${(p: IOverlayNavbarProps) => (p.isOpen) ? "flex" : "none"};
  flex-direction: column;
`;

const OverlayContent = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 18px;
  & > a {
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
    padding: 22px 8px;
    text-decoration: none;
    font-size: 24px;
    color: white;
    display: block;
    transition: 0.3s;
    font-weight: 500;
    &:hover, &:focus {
      color: ${darken(0.4, "#FFF")};
    }
    @media screen and (max-width: 575px) {
      padding: 18px 8px;
      font-size: 18px;
    }
  }
`;

const CloseButtonWrapper = styled(CloseButton)`
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 40px;
  color: white;
  opacity: 0.8;
  &:focus, &:hover {
    color: ${darken(0.2, "#FFF")};
  }
`;

export {OverlayWrapper, OverlayContent, CloseButtonWrapper};