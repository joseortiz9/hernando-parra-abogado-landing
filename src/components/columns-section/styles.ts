import styled from "styled-components";
import {CardColumns, Container} from "react-bootstrap";

const ContainerWrapper = styled(Container)`
  padding-top: 2rem;
`;

const CardColumnsWrapper = styled(CardColumns)`
  @media screen and (min-width: 576px) {
    column-count: 1;
  }
  @media screen and (min-width: 768px) {
    column-count: 2;
  }
  @media screen and (min-width: 992px) {
    column-count: 3;
  }
`;

export {ContainerWrapper, CardColumnsWrapper};