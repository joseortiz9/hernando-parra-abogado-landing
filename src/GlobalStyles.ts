import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    b {
      font-weight: bold !important;
    }
    
    section {
      margin-bottom: 100px;
      padding-top: 5rem;
    }

    p.lead {
        font-size: 16px;
        @media screen and (max-width: 578px) {
          font-size: 14px;
        }
    }
    
    .bgSectionsWrapper {
      background: #F9FFFC;
      //z-index: auto;
    }
`;

export default GlobalStyle;