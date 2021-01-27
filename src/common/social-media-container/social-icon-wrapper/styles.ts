import styled from "styled-components";
import {IBgStyleProp} from "../index";

const LogoWrapper = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background: ${(p: IBgStyleProp) => (p.bgStyle === "white") ? "rgba(255, 255, 255, 0.1)" : "rgba(2, 51, 36, 0.1)"};
  padding: 10px;
`;

export {LogoWrapper};
