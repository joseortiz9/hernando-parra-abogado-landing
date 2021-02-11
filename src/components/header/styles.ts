import styled from "styled-components";

const HeaderWrapper = styled.header`
  nav.navbar {
    background-color: transparent;
    transition: all 0.3s ease;
    .nav-link {
      font-family: OpenSansRegular, serif, Arial;
      font-size: 16px;
      font-weight: 600;
      color: #18191F;
      letter-spacing: 0.05em;
      &:not(:last-child) {
        margin-right: 10px;
        @media screen and (min-width: 992px) {
          margin-right: 15px;
        }
      }
      &.router-link {
        color: #219653;
      }
    }
    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
    }
  }
  .sticky-nav-active {
    nav.navbar {
      background-color: white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      padding: 5px 15px;
      transition: all 0.2s ease;
      @media (max-width: 1100px) {
        padding: 10px 15px 10px;
      }
      @media (max-width: 991px) {
        padding: 10px 15px 10px;
      }
      @media (max-width: 768px) {
        padding: 20px 15px 10px;
      }
      @media (max-width: 480px) {
        padding: 5px 15px;
      }
    }
  }
`;

export { HeaderWrapper };