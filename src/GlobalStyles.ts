import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    section {
      margin-bottom: 100px;
    }

    p.lead {
        font-size: 16px;
        @media screen and (max-width: 578px) {
          font-size: 14px;
        }
    }
`;

export default GlobalStyle;