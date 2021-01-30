import styled from "styled-components";
import {Button} from "react-bootstrap";
import {darken} from "polished";

const ButtonWrapper = styled(Button)`
  background: #77BC1F;
  border-radius: 8px;
  border: 0;
  &:hover, &:focus {
    background: ${darken(0.05, "#77BC1F")};
    border: 0;
  }
`;

export {ButtonWrapper};