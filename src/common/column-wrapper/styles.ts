import styled from "styled-components";
import {Card, Modal} from "react-bootstrap";

const ColumnWrapper = styled(Card)`
  background: #F3FFF3;
  border: 1px solid rgba(1, 81, 44, 0.1);
  h1 {
      font-size: 18px;
      line-height: 23px;
  }
`;
const ModalWrapper = styled(Modal)`
  border: none;
  .modal-70w {
    width: 60%;
    max-width: none!important;
  }
  .modal-header {
      padding: 25px;
      border: none;
      font-family: OpenSansRegular, sans-serif, Arial, Helvetica;
      font-size: 14px;
      color: #4F4F4F;
      line-height: 24px;
  }
  .modal-body {
    padding: 25px;
    h1 {
    font-family: MontserratTitle, sans-serif, Arial, Helvetica;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    }
    .italic-subtitle {
    font-family: OpenSansItalic, sans-serif, Arial, Helvetica;
    font-size: 14px;
    line-height: 28px;
    }
  }
`;

export {ColumnWrapper, ModalWrapper};