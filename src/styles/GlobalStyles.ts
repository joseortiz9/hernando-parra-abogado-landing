import {createGlobalStyle} from "styled-components";
import OpenSansRegularFont from "../assets/fonts/Open_Sans/OpenSans-Regular.ttf";
import OpenSansItalicFont from "../assets/fonts/Open_Sans/OpenSans-LightItalic.ttf";
import MontserratTitleFont from "../assets/fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratSubTitleFont from "../assets/fonts/Montserrat/Montserrat-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: MontserratTitle;
        font-style: normal;
        font-weight: 700;
        src: url(${MontserratTitleFont});
    }
    
    @font-face {
        font-family: MontserratSubTitle;
        font-style: normal;
        font-weight: 600;
        src: url(${MontserratSubTitleFont});
    }
    
    @font-face {
        font-family: OpenSansRegular;
        font-style: normal;
        font-weight: 400;
        src: url(${OpenSansRegularFont});
    }
    @font-face {
        font-family: OpenSansItalic;
        font-style: italic;
        font-weight: 300;
        src: url(${OpenSansItalicFont});
    }
    
    b {
      font-weight: bold !important;
    }
    
    section {
      margin-bottom: 150px;
      padding-top: 5rem;
      @media screen and (max-width: 767px) {
        margin-bottom: 100px;
      }
      h1 {
        font-family: MontserratTitle, sans-serif, Arial, Helvetica;
        &.subtitle {
          font-family: MontserratSubTitle, sans-serif, Arial, Helvetica;
        }
      }
      span, button {
        font-family: OpenSansRegular, sans-serif, Arial, Helvetica;
      }
    }

    p.lead {
      font-family: OpenSansRegular, sans-serif, Arial, Helvetica;
      font-size: 16px;
      line-height: 28px;
      @media screen and (max-width: 578px) {
        font-size: 14px;
      }
    }
    
    .bgSectionsWrapper {
      background: #F9FFFC;
      padding-top: 60px;
    }
`;

export default GlobalStyle;